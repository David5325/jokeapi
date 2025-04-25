const CLAVE = 'jokes_favoritos'

export function obtenerFavoritos() {
  const guardados = localStorage.getItem(CLAVE)
  return guardados ? JSON.parse(guardados) : []
}

export function guardarFavorito(joke) {
  const actuales = obtenerFavoritos()
  const yaExiste = actuales.some((j) => j.id === joke.id)
  if (!yaExiste) {
    const nuevos = [...actuales, joke]
    localStorage.setItem(CLAVE, JSON.stringify(nuevos))
  }
}

export function eliminarFavorito(jokeId) {
  const actuales = obtenerFavoritos()
  const nuevos = actuales.filter((j) => j.id !== jokeId)
  localStorage.setItem(CLAVE, JSON.stringify(nuevos))
}

export function estaEnFavoritos(jokeId) {
  const actuales = obtenerFavoritos()
  return actuales.some((j) => j.id === jokeId)
}
