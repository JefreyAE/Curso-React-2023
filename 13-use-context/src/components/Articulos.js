import React, {useContext} from 'react';
import { PruebaContext } from '../context/PruebaContext';


export const Articulos = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);
  
  return (
    <div>
        <h1>Articulos</h1>
        <p>Valor compartido: {usuario.nombre} {usuario.apellidos}</p>
    </div>
  )
}
