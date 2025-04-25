import { useEffect, useState } from 'react'

function Guardados() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    const almacenados = localStorage.getItem('favoritos')
    if (almacenados) {
      setFavoritos(JSON.parse(almacenados))
    }
  }, [])

  return (
    <div style={{ paddingBottom: '60px' }}>
      <h2>Guardados</h2>
      {favoritos.length === 0 ? (
        <p>No tienes chistes guardados.</p>
      ) : (
        favoritos.map((joke, index) => (
          <div key={index} style={{ marginBottom: '1rem', padding: '10px', border: '1px solid #ccc' }}>
            {joke.type === 'single' ? (
              <p>{joke.joke}</p>
            ) : (
              <>
                <p><strong>{joke.setup}</strong></p>
                <p>{joke.delivery}</p>
              </>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Guardados
