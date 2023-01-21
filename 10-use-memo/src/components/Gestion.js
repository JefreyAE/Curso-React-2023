import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Empleados } from './Empleados'
import { useParams } from 'react-router-dom'

export const Gestion = () => {

    let {paramNombre = ""} = useParams();
    const [nombre, setNombre] = useState(paramNombre);
    const [page, setPage] = useState(1);

    const nombreInput = useRef();

    useEffect(() =>{
      console.log('Renderizado de Gestion');
    },[nombre, page]);

    const mostrarMensaje = useCallback(() => {
      console.log("Mensaje en");
    }, [page])

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type='text' ref={nombreInput} onChange={() => setNombre(nombreInput.current.value)} placeholder='Introduce tu nombre'/>

        <h2>Listado de empleados</h2>
        <button onClick={() => {setPage(1)}}>Obtener de pagina 1</button>
        <button onClick={() => {setPage(2)}}>Obtener de pagina 2</button>
        <Empleados pageNumber={page} mensaje={mostrarMensaje}/>
    </div>
  )
}
