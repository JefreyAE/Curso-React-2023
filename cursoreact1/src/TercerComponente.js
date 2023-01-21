import React from 'react'
import { PropTypes } from 'prop-types'

export const TercerComponente = (props) => {

  return (
    <div>
        <h1>Tercer Componente</h1>
        <p>Nombre: {props.nombre}</p>
        <p>Apellido: {props.apellido}</p>
        <p>Altura: {props.ficha.altura}</p>
        <p>Peso: {props.ficha.peso}</p>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    ficha: PropTypes.object,
}

TercerComponente.defaultProps = {
    nombre: "Juan",
    apellido: "Solis"
}