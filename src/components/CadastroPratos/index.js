// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import {useNavigate} from 'react-router-dom'
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo.png'
import axios from 'axios'
import background from '../../assets/images/background.jpg'

function CadastroPratos() {
    const [nomeprato, setNomeprato] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')
    const [disponibilidade, setDisponibilidade] = useState('')
    const navigate = useNavigate()
    const [url, setUrl] = useState('')
     const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarPrato = async () => {
        try {
            const response = await axios.post('https://atividade-pontuada-restaurante-dupla.onrender.com/restaurante', {nomeprato, preco, descricao, categoria,disponibilidade,url})
            exibirMensagem(response.data.mensagem || 'Prato cadastrado com sucesso!', 'sucesso')
            setNomeprato('')
            setDescricao('')
            setDisponibilidade('')
            setPreco('')
            setCategoria('')
            setUrl('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="container-image">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <ul className="navbar-list">
                    <li onClick={() => navigate('/home')} className="navbar-link">Home</li>
                    <li onClick={() => navigate('/cadastro')} className="navbar-link">Cadastro</li>
                    <li onClick={() => navigate('/lista')} className="navbar-link">Lista</li>
                </ul>
            </nav>
            <img src={background} alt="Background" className="background-image" />
            <div className="square-cadastro">
                <div className="container">
                    <h2>Cadastro de pratos</h2>
                    <form onSubmit={(e) => {e.preventDefault(); cadastrarPrato()}}>
                        <input 
                            type="text"
                            id="nomeprato"
                            placeholder="Nome do prato"
                            value={nomeprato}
                            onChange={(e) => setNomeprato(e.target.value)}
                            required
                        />
                        <input 
                            type="text"
                            id="descricao"
                            placeholder="Descrição do prato"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                        <input 
                            type="number"
                            id="preco"
                            placeholder="Digite o valor do prato..."
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                        <select 
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            {categoria === '' && (
                                <option value="" disabled>Categoria</option>
                            )}
                            <option value="ENTRADA">Entrada</option>
                            <option value="PRATO_PRINCIPAL">Prato principal</option>
                            <option value="SOBREMESA">Sobremesas</option>
                            <option value="BEBIDA">Bebidas</option>
                        </select>
                        
                        <select 
                            value={disponibilidade}
                            onChange={(e) => setDisponibilidade(e.target.value)}
                        >
                            {disponibilidade === '' && (
                                <option value="" disabled>Disponibilidade</option>
                            )}
                            <option value="EM_ESTOQUE">Em estoque</option>
                            <option value="ESGOTADO">Esgotado</option>
                        </select>
                        
                        <input 
                            type="text"
                            id="url"
                            placeholder="Digite a URL da imagem..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                        {url && (
                            <div className="image-preview">
                                <h4>Pré-visualização da imagem:</h4>
                                <img 
                                    src={url} 
                                    alt="Pré-visualização do prato" 
                                    className="preview-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        )}
                        
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default CadastroPratos