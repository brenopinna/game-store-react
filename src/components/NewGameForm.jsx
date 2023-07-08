/* eslint-disable react/prop-types */
import { useState } from "react"
import { TextInput } from "./TextInput"

export function NewGameForm({ createGame }) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState(
    "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
  )

  function handleFormSubmit(event) {
    event.preventDefault()
    createGame({ title, cover })
    setTitle("")
    setCover("")
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <TextInput
        label="Título:"
        id="title"
        state={title}
        setState={setTitle}
        name="title"
        type="text"
      />
      <TextInput
        label="Capa:"
        id="title"
        state={cover}
        setState={setCover}
        name="cover"
        type="url"
      />
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  )
}
