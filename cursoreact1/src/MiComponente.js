import React from 'react'

export const MiComponente = () => {

    const nombre = "Jefrey";
    const apellido = "Arias";

    let usuario = {
        id: 1,
        nombre: "Paco"
    }

  return (
    <div>
        <h1>Mi Componente</h1>
        <h3>Mis datos:</h3>
        <ul>
            <li>Nombre: {nombre}</li>
            <li>Apellido: {apellido}</li>
        </ul>
        <h3>Datos del usuario:</h3>
        <ul>
            <li>Id: {usuario.id}</li>
            <li>Nombre: {usuario.nombre}</li>
        </ul>
    </div>
  )
}
