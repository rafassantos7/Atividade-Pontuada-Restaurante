import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import './App.css'; // Para estilos globais, se necessário
import PaginaListaPratos from './pages/Lista';
import BemVindo from './pages/BemVindo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<BemVindo />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/lista" element={<PaginaListaPratos />} />
      </Routes>
    </Router>
  );
}

export default App;