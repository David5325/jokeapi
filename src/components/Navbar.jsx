import { Link } from 'react-router-dom'

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
      <Link to="/">Home</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/aleatorio">Aleatorio</Link>
      <Link to="/usuario">Usuario</Link>
      <Link to="/guardados">Guardados</Link>
    </nav>
  )
}

export default Navbar
