import React, {useState, useReducer, useEffect } from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem('juegos', JSON.stringify(juegos));
    },[juegos])

    const conseguirDatosForm =  (e) => {
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value,
        }

        const action = {
            type: 'crear',
            payload: juego
        }

        dispatch(action);
    }

    const borrar = (id) =>{
        const action = {
            type: "borrar",
            payload: id
        }
        dispatch(action);
    }

    const update = (e, juego) =>{
        const action = {
            type: "update",
            payload: {
                id: juego.id,
                titulo: e.target.value,
                descripcion: juego.descripcion        
            } 
        }
        dispatch(action);
    }

  return (
    <div>
        <h1>Mis videojuegos</h1>

        <p>Numero de videjuegos: {juegos.length}</p>
        <ul>
            {juegos && juegos.map((juego)=>{
                return(
                    <li key={juego.id}>{juego.titulo}
                        &nbsp; <button onClick={() => borrar(juego.id)}>Borrar</button>
                        <input type='text' name="descripcion" defaultValue={juego && juego.descripcion ? juego.descripcion : ''} 
                            onBlur={(e)=>update(e, juego)}
                            onKeyDown={(e)=>{
                                if(e.key == "Enter"){
                                    update(e, juego);
                                }
                            }}
                        />
                    </li>
                )
            })}
           
        </ul>
        <h3>Agregar juego</h3>

        <form onSubmit={conseguirDatosForm}>
            <input type='text' name='titulo' placeholder='Titulo' />
            <input type='textarea' name='descripcion' placeholder='Descripcion'/>
            <input type='submit' value='Guardar' />
        </form>
    </div>
  )
}
