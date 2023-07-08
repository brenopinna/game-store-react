import { Game } from "./components/Game"
import { NewGameForm } from "./components/NewGameForm"
import { useGameCollection } from "./hooks/useGameCollection"

function App() {
  const { createGame, deleteGame, games } = useGameCollection()

  return (
    <div className="container">
      <h1 className="title">Biblioteca de Jogos</h1>
      <NewGameForm createGame={createGame} />

      {games.length ? (
        <div className="games">
          {games.map((game) => (
            <Game key={game.id} game={game} deleteGame={deleteGame} />
          ))}
        </div>
      ) : (
        <p className="no-games">Você não possui jogos cadastrados!</p>
      )}
    </div>
  )
}

export default App
