import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Asegúrate de que la configuración de Supabase esté correcta

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Redirigir después del registro exitoso

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Intentamos registrar al usuario en Supabase
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      alert('Registro exitoso! Por favor, inicia sesión.');
      navigate('/login');  // Redirige a la página de login después de registro exitoso
    } catch (error) {
      setError(error.message); // Mostrar errores si los hay
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Registrar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar errores si los hay */}
    </div>
  );
}

export default Register;
