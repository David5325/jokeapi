import React from "react";
import { Link } from 'react-router-dom';
import Logout from "../pages/Logout";  // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav style={{ 
      position: 'fixed', 
      bottom: 0, 
      width: '100%', 
      backgroundColor: '#f1f1f1', 
      borderTop: '1px solid #ccc', 
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '10px 0'
    }}>
      {/* Enlaces de navegación */}
      <Link to="/home">Home</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/aleatorio">Aleatorio</Link>
      <Link to="/usuario">Usuario</Link>
      <Link to="/guardados">Guardados</Link>
      <Link to="/register">Registro</Link> {/* Enlace para el registro */}
      <Logout />
    </nav>
  );
}

export default Navbar;
