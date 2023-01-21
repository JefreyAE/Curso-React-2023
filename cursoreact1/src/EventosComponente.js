import React from 'react'

export const EventosComponente = () => {

  const action = (e, nombre) =>{
    alert("Hola "+nombre);
  }


  return (
    <div>
        <h1>Eventos en React</h1>
        <button onClick={e => action(e, "Jefrey")}>Boton evento click</button>
    </div>
  )
}
