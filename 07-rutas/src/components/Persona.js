import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    let {nombre = "", apellido = ""} = useParams();
    const navegar = useNavigate();

    const enviar = (e) =>{
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;

        navegar(`/persona/${nombre}/${apellido}`);
    }

  return (
    <div>
        <h1>Hola {nombre} {apellido}</h1>
        <form onSubmit={enviar}>
            <input type="text" name="nombre"/>
            <input type="text" name="apellido"/>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
