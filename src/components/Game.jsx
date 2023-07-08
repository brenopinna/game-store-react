/* eslint-disable react/prop-types */
export function Game({ game, deleteGame }) {
  return (
    <div>
      <h1>{game.title.length > 9 ? game.title.slice(0, 9) + "..." : game.title}</h1>
      <img src={game.cover} alt={game.title} title={game.title} />
      <button onClick={() => deleteGame(game)}>Remover</button>
    </div>
  )
}
