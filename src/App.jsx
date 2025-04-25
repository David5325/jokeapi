import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Aleatorio from './pages/Aleatorio'
import Usuario from './pages/Usuario'
import Guardados from './pages/Guardados'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/aleatorio" element={<Aleatorio />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/guardados" element={<Guardados />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App
