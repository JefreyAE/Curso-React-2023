import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { Panel } from '../components/Panel';
import { InicioPanel } from '../components/panel/Inicio';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';
import { Crear } from '../components/panel/Crear';

export const MainRouter = () => {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <NavLink to="/Inicio" className={({isActive}) => isActive  ? "resaltado": undefined}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Articulos" className={({isActive}) => isActive  ? "resaltado": undefined}>
                        Articulos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contacto" className={({isActive}) => isActive  ? "resaltado": undefined}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Panel" className={({isActive}) => isActive  ? "resaltado": undefined}>
                        Panel de control
                    </NavLink>
                </li>
            </ul>
        </nav>
        <hr/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/articulos' element={<Articulos/>}/>
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/persona/:nombre/:apellido' element={<Persona/>} />
            <Route path='/persona/:nombre' element={<Persona/>} />
            <Route path='/persona/:apellido' element={<Persona/>} />
            <Route path='/persona' element={<Persona/>} />
            <Route path='/redirect' element={<Navigate to={"/persona/Paco/Web"}/>} />
            <Route path='/panel/*' element={<Panel/>}>
                <Route index element={<InicioPanel/>}/>
                <Route path='inicio' element={<InicioPanel/>}/>
                <Route path='gestion-usuarios' element={<Gestion/>}/>
                <Route path='acerca' element={<Acerca/>}/>
                <Route path='crear-articulos' element={<Crear/>}/>
            </Route>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}
