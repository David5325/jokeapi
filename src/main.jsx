import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que App.js esté correctamente importado
import { BrowserRouter as Router } from 'react-router-dom'; // Importa solo el Router aquí

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Envuelve tu App solo en el Router aquí
root.render(
  <Router>
    <App />
  </Router>
);
