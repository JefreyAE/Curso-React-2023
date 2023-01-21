import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioComponent = () => {

  const {formulario, enviarFormulario, cambiado} = useForm({});

  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar un curso</p>
        <p>Curso guardado: {formulario.titulo}</p>
        <p className='codigo'>{JSON.stringify(formulario)}</p>
        <form className='mi-formulario' onSubmit={enviarFormulario}>
          <input type='text' onChange={cambiado} name='titulo' placeholder='Titulo'/>
          <input type='number' onChange={cambiado} name='year' placeholder='Año de publicación' />
          <textarea type='text' onChange={cambiado} name='descripcion' placeholder='Descripción'></textarea>
          <input type='text' onChange={cambiado} name='autor' placeholder='Autor' />
          <input type='email' onChange={cambiado} name='email' placeholder='Correo de contacto' />

          <input type='submit' value='Enviar' />
        </form>
    </div>
  )
}
