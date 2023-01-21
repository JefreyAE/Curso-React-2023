import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PruebaContext } from '../context/PruebaContext'

export const Login = () => {

  const navigate = useNavigate();

  const {usuario, setUsuario} = useContext(PruebaContext);

  const guardarDatos = (e) =>{
    e.preventDefault()

    const user = {
      nombre: e.target.nombre.value, 
      apellidos: e.target.apellidos.value,
      username: e.target.username.value
    }
    setUsuario(user);

    localStorage.setItem('usuario', JSON.stringify(user));
    navigate('/inicio');
  }
  
  return (
    <div>
        <h1>Login</h1>
        <form className='login' onSubmit={guardarDatos}>
          <input type='text' name="username" placeholder='Nickname'/>
          <input type='text' name="nombre" placeholder='Nombre'/>
          <input type='text' name="apellidos" placeholder='Apellidos'/>
          <input type='submit' value='Ingresar'/>
        </form>
    </div>
  )
}
