import { useEffect, useState } from 'react'
import {
  obtenerFavoritos,
  guardarFavorito,
  eliminarFavorito
} from '../data/favoritos'

function Home() {
  const [jokes, setJokes] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Any')
  const [favoritos, setFavoritos] = useState(obtenerFavoritos())

  const fetchJokes = async () => {
    try {
      const url = `https://v2.jokeapi.dev/joke/${category}?amount=10${search ? `&contains=${search}` : ''}`
      const res = await fetch(url)
      const data = await res.json()

      const results = data.jokes ? data.jokes : [data]
      setJokes(results)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [category, search])

  const toggleFavorito = (joke) => {
    const existe = favoritos.some((j) => j.id === joke.id)
    if (existe) {
      eliminarFavorito(joke.id)
      setFavoritos(favoritos.filter((j) => j.id !== joke.id))
    } else {
      guardarFavorito(joke)
      setFavoritos([...favoritos, joke])
    }
  }

  return (
    <div style={{ paddingBottom: '60px' }}>
      <h2>Chistes de JokeAPI</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar palabra clave..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Any">Todas</option>
          <option value="Programming">Programming</option>
          <option value="Misc">Misc</option>
          <option value="Dark">Dark</option>
          <option value="Pun">Pun</option>
          <option value="Spooky">Spooky</option>
          <option value="Christmas">Christmas</option>
        </select>
      </div>

      {jokes.map((joke, i) => (
        <div key={i} style={{ marginBottom: '1rem', padding: '10px', border: '1px solid #ccc' }}>
          {joke.type === 'single' ? (
            <p>{joke.joke}</p>
          ) : (
            <>
              <p><strong>{joke.setup}</strong></p>
              <p>{joke.delivery}</p>
            </>
          )}
          <button onClick={() => toggleFavorito(joke)}>
            {favoritos.some((j) => j.id === joke.id)
              ? 'Quitar de favoritos'
              : 'Añadir a favoritos'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
