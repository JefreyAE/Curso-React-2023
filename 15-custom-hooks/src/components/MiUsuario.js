import React, { useEffect, useState } from 'react'
import { useAjax } from '../hooks/useAjax'

export const MiUsuario = () => {

  const [url, setUrl] = useState("https://reqres.in/api/users/1");
  const {estado} = useAjax(url);

  const getUrl = ({target}) => {
    let id = target.value;
    setUrl("https://reqres.in/api/users/"+id);
  }

  return (
    <div>
        <h1>Mi Usuario</h1>
        <p>Datos del usuario</p>
        {estado.cargando ? (
          <p>Cargando...</p>) : (
          <>
            <p>{estado?.datos?.first_name} {estado?.datos?.last_name}</p>
            <p><img src={estado?.datos?.avatar} /></p>
          </>)
        }   
        <input type='number' name='userId' onChange={getUrl} placeholder='Ingresa el indice' />
    </div>
  )
}
