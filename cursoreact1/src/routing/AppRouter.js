import React from 'react';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Login } from '../components/Login';
import { Ejercicio1 } from '../components/Ejercicio1';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <header className='header'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/inicio'>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/articulos'>Articulos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto'>Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to='/acerca'>Acerca</NavLink>
                        </li>
                        <li>
                            <NavLink to='/ejercicio1'>Ejercicio 1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className='content'>
                <Routes>
                    <Route path='/inicio' element={<Inicio />}></Route>
                    <Route path='/articulos' element={<Articulos />}></Route>
                    <Route path='/contacto' element={<Contacto />}></Route>
                    <Route path='/acerca' element={<Acerca />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/ejercicio1' element={<Ejercicio1 year={2023}/>}></Route>
                    <Route path='*' element={<div><h1>Error</h1></div>}></Route>
                </Routes>
            </section>
        </BrowserRouter>
    )
}
