import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar el usuario
  const navigate = useNavigate();

  useEffect(() => {
    // Comprobamos si hay un usuario logueado al cargar la aplicación
    const session = supabase.auth.session();
    setUser(session?.user);

    // Establecemos un listener para cuando cambie el estado de la sesión
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user); // Actualizamos el estado del usuario
        if (event === 'SIGNED_OUT') {
          navigate('/login'); // Si el usuario cierra sesión, redirigimos al login
        }
      }
    );

    return () => {
      authListener?.unsubscribe(); // Limpiamos el listener cuando el componente se desmonta
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext); // Para acceder al contexto en cualquier componente
};
