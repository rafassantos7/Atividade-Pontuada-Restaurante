// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'
import cardapio from '../../assets/images/cardapio.jpg'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
function ListaDePratos() {
    const [pratos, setPratos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const carregarPratos = async () => {
            try {
                const response = await axios.get('https://atividade-pontuada-restaurante-dupla.onrender.com/restaurante')
                setPratos(response.data)
            } catch (error) {
                alert('Erro ao buscar Pratos: ', error)
                setPratos([])
            }
        }
        carregarPratos()
    }, [])
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
        <img src={cardapio} alt="Cardápio" className="background-cardapio"/>
        <div className="container-lista">
            <ul id="listaPratos" className="lista-pratos">
            <h1 className="titulo">Lista de Pratos</h1>
            <p>Confira os pratos disponíveis no nosso cardápio:</p>
            {pratos.length === 0 ? (
                <li>Nenhum prato encontrado.</li>
            ) : (
                pratos.map( prato => (
                    <li key={prato.id} className="prato-item">
            <strong>Nome: </strong> {prato.nomeprato}<br />
            <strong>Descrição: </strong> {prato.descricao}<br />
            <strong>Preço: </strong> {prato.preco}<br />
            <strong>Disponibilidade: </strong> {prato.disponibilidade}<br />
            <strong>Categoria: </strong> {prato.categoria}<br />
            <img 
    src={prato.url} 
    alt="Imagem do prato" 
    className="image-prato"
/>
         </li>
                ))
            )}
        </ul>
    </div>
    </div>
    )
    
}

export default ListaDePratos