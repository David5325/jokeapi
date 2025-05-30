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
      <Link to="/Favoritos">Favoritos</Link>
      <Link to="/Aleatorio">Aleatorio</Link>
      <Link to="/Usuario">Usuario</Link>
      <Link to="/Guardados">Guardados</Link>
      
      {/* Botón de logout */}
      <Logout /> {/* Agregamos el botón de logout aquí */}
    </nav>
  );
}

export default Navbar;
