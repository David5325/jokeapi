import { useEffect, useState } from 'react'

function Aleatorio() {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchJoke = async () => {
    try {
      setLoading(true)
      const res = await fetch('https://v2.jokeapi.dev/joke/Any')
      const data = await res.json()
      setJoke(data)
      setLoading(false)
    } catch (err) {
      console.error('Error al obtener chiste aleatorio:', err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div style={{ paddingBottom: '60px' }}>
      <h2>Chiste aleatorio</h2>
      {loading ? (
        <p>Cargando chiste...</p>
      ) : joke ? (
        <div style={{ marginBottom: '1rem', padding: '10px', border: '1px solid #ccc' }}>
          {joke.type === 'single' ? (
            <p>{joke.joke}</p>
          ) : (
            <>
              <p><strong>{joke.setup}</strong></p>
              <p>{joke.delivery}</p>
            </>
          )}
        </div>
      ) : (
        <p>No se pudo cargar el chiste.</p>
      )}
      <button onClick={fetchJoke}>Nuevo chiste</button>
    </div>
  )
}

export default Aleatorio
