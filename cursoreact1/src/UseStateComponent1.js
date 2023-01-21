import React, { useState } from 'react'

export const UseStateComponent1 = () => {

  const [nombre, setNombre] = useState("Pedro");

  const mostrarNombre = (e, nombre)=>{
    setNombre(nombre)
  }

  return (
    <div>
      <h1>Como usar UseState - Hook UseState</h1>
      <button onClick={e => mostrarNombre(e,"Jefrey")}>Mostrar nombre</button>
      <h3>Mi nombre: {nombre}</h3>
    </div>
  )
}
