import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);
  const cerrarSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem('usuario');
    setUsuario( {});
  }

  return (
    <BrowserRouter>
        <header className='header'>
            <nav>
                <div className='logo'>
                    <h1>Aprendiendo useContext</h1>
                </div>
                <ul>
                    <li><NavLink to={"/"} className={({isActive})=> isActive ? 'resaltado' : ""}>Inicio</NavLink></li>
                    <li><NavLink to={"/articulos"} className={({isActive})=> isActive ? 'resaltado' : ""}>Articulos</NavLink></li>
                    <li><NavLink to={"/acerca-de"} className={({isActive})=> isActive ? 'resaltado' : ""}>Acerca de</NavLink></li>
                    <li><NavLink to={"/contacto"} className={({isActive})=> isActive ? 'resaltado' : ""}>Contacto</NavLink></li>
                    {usuario.username ? (
                        <>
                            <li><NavLink to="/">{usuario.username}</NavLink></li>
                            <li><a href='#' onClick={(e) => cerrarSesion(e)}>Cerrar sesion</a></li>
                        </>
                    ) : (
                        <li><NavLink to={"/login"} className={({isActive})=> isActive ? 'resaltado' : ""}>Identificate</NavLink></li>
                    ) }
                </ul>
            </nav>
        </header>
        
        <section className='content'>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/acerca-de' element={<Acerca/>}/>
                <Route path='/articulos' element={<Articulos/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='*' element={(<h1>404 - Esta pagina no existe</h1>)}/>
            </Routes>
        </section>
    </BrowserRouter>
  )
}
