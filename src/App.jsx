import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';  // Asegúrate de que el componente esté correctamente importado
import Login from './pages/Login';  // Asegúrate de que el componente esté correctamente importado
import Home from './pages/Home';  // Asegúrate de que tienes una página Home
import Navbar from './components/Navbar';  // Si tienes un Navbar, lo importas también

function App() {
  return (
    <div>
      <Navbar /> {/* Este Navbar se renderizará en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Ruta raíz */}
        <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
        <Route path="/register" element={<Register />} /> {/* Ruta para Register */}
        {/* Aquí puedes añadir más rutas si es necesario */}
      </Routes>
    </div>
  );
}

export default App;
