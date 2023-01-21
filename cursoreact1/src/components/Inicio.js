import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const contextoCompartido = useContext(PruebaContext)
  return (
    <div>
    <h1>Inicio</h1>
      {contextoCompartido.altura}
    </div>
  )
}
