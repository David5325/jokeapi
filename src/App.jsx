import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Asegúrate de que el componente esté bien importado
import Favoritos from './pages/Favoritos'; // Asegúrate de que el componente esté bien importado
import Aleatorio from './pages/Aleatorio'; // Asegúrate de que el componente esté bien importado
import Usuario from './pages/Usuario'; // Asegúrate de que el componente esté bien importado
import Guardados from './pages/Guardados'; // Asegúrate de que el componente esté bien importado
import Login from './pages/Login'; // Asegúrate de que el componente esté bien importado
import Navbar from './components/Navbar'; // Importa el Navbar

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar se muestra en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/aleatorio" element={<Aleatorio />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/guardados" element={<Guardados />} />
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
