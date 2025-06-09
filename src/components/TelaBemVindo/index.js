// src/pages/BemVindo/index.js
import './styles.css'
import logo from '../../assets/images/logo.png'
import fachada from '../../assets/images/fachada.jpg'
import { useNavigate } from 'react-router-dom'

function TelaBemVindo(){
    const navigate = useNavigate()
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
            <img src={fachada} alt="Fachada" className="fachada" />
         <div className= "container-bemvindo">
            <div className="conteudo">
            <h1 id='titulo-bemvindo'>Bem-vindo</h1>
            <p>Bienvenue ! Découvrez les saveurs de la France dans chaque assiette.</p>
            </div> 
       </div>
        </div>
   );
}
export default TelaBemVindo;