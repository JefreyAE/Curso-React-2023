import React from 'react'

export const SegundoComponente = () => {
    
    const libros = ["Harry P", "Juego de T","Clean Code"];
    //const libros = [];
  return (
    <div className='SegundoComponente'>
        <h1>Listado de libros</h1>
        {libros.length >= 1 ?
            (
                <ul>
                    { 
                        libros && libros.map((libro, index)=>{
                        return <li key={index}>{libro}</li>
                        })
                    }
                </ul>
            )
            : (
                <h1>No hay libros</h1>
            )
        }
    </div>
  )
}
