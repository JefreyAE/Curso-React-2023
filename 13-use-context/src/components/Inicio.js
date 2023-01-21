import React, {useContext} from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const contextoCompartido = useContext(PruebaContext)

  return (
    <div>
        <h2>Inicio</h2>
        <p>Valor compartido: {contextoCompartido.usuario.nombre}</p>
    </div>
  )
}
