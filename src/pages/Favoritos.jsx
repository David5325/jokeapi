import { useEffect, useState } from 'react'
import { obtenerFavoritos, eliminarFavorito } from '../data/favoritos'

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    setFavoritos(obtenerFavoritos())
  }, [])

  const quitarFavorito = (id) => {
    eliminarFavorito(id)
    setFavoritos(obtenerFavoritos())
  }

  return (
    <div style={{ paddingBottom: '60px' }}>
      <h2>Mis chistes favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No hay favoritos todavía.</p>
      ) : (
        favoritos.map((joke, i) => (
          <div key={i} style={{ marginBottom: '1rem', padding: '10px', border: '1px solid #ccc' }}>
            {joke.type === 'single' ? (
              <p>{joke.joke}</p>
            ) : (
              <>
                <p><strong>{joke.setup}</strong></p>
                <p>{joke.delivery}</p>
              </>
            )}
            <button onClick={() => quitarFavorito(joke.id)}>Quitar</button>
          </div>
        ))
      )}
    </div>
  )
}

export default Favoritos
