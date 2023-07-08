import { useState } from "react"

function getGames() {
  return JSON.parse(localStorage.getItem("games")) ?? []
}

export function useGameCollection() {
  const [games, setGames] = useState(getGames)

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

  function deleteGame(gameToRemove) {
    confirm(`Tem certeza que deseja remover ${gameToRemove.title} da sua lista?`) &&
      updateGames((games) => games.filter((game) => game.id !== gameToRemove.id))
  }

  return { games, createGame, deleteGame }
}
