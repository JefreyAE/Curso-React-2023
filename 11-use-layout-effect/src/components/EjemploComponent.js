import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'

export const EjemploComponent = () => {

    const [mostrar, setMostrar] = useState(false);

    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(() => {
        console.log("useLayoutEffect: Componente cargado");
       
    }, []);

    useEffect(() => {
        console.log("useEffect: Componente cargado");

        const {bottom} = boton.current.getBoundingClientRect();

       if(caja.current){
            caja.innerHTML = "Hola useEffect";
            caja.current.style.marginTop = `${bottom + 45}px`;
            caja.current.style.marginLeft = `${bottom + 45}px`;
       }
        
        
        
    }, [mostrar]);

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>

        <button ref={boton} onClick={() => setMostrar(prev => !prev)}>Mostrar mensaje</button>
        {mostrar && (
            <div id='caja' ref={caja}>
                Hola, es un mensaje {mostrar}
            </div>
        )}
    </div>
  )
}
