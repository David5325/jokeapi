import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos el hook para redirigir al login
import supabase from '../supabaseClient'; // Importamos la configuración de Supabase

function Logout() {
  const navigate = useNavigate(); // Usamos el hook useNavigate para redirigir

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut(); // Cerramos la sesión con Supabase
      alert('Has cerrado sesión');
      navigate('/login'); // Redirigimos al usuario a la página de login
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>; // Botón para cerrar sesión
}

export default Logout;
