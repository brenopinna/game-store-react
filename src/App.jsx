import { useState } from "react"

function getGames() {
  return JSON.parse(localStorage.getItem("games")) ?? []
}

function App() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState(
    "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
  )
  const [games, setGames] = useState(getGames)

  function handleFormSubmit(event) {
    event.preventDefault()
    createGame({ title, cover })
    setTitle("")
    setCover("")
  }

  function createGame({ title, cover }) {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover }
    updateGames((games) => [...games, game])
  }

  function updateGames(callback) {
    setGames((games) => {
      const newGamesState = callback(games)
      localStorage.setItem("games", JSON.stringify(newGamesState))
      return newGamesState
    })
  }

  function handleGameDelete(gameToRemove) {
    confirm(`Tem certeza que deseja remover ${gameToRemove.title} da sua lista?`) &&
      updateGames((games) => games.filter((game) => game.id !== gameToRemove.id))
  }

  return (
    <div className="container">
      <h1 className="title">Biblioteca de Jogos</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            required
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            type="url"
            name="cover"
            id="cover"
          />
        </div>
        <button type="submit">Adicionar à biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <h1>{game.title.length > 9 ? game.title.slice(0, 9) + "..." : game.title}</h1>
            <img src={game.cover} alt={game.title} title={game.title} />
            <button onClick={() => handleGameDelete(game)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
