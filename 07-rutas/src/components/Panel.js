import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Panel = () => {
  return (
    <div>
        <h1>Panel</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/inicio' className={({isActive})=>isActive?"resaltado":undefined}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/crear-articulos' className={({isActive})=>isActive?"resaltado":undefined}>Crear articulos</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/gestion-usuarios' className={({isActive})=>isActive?"resaltado":undefined}>Gestión de usuarios</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/acerca' className={({isActive})=>isActive?"resaltado":undefined}>Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <hr/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
