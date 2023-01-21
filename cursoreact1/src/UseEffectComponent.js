import React, { useEffect, useState } from 'react'

export const UseEffectComponent = () => {

    const [usuario, setUsuario] = useState("Jefrey Arias");

    const modUsuario = (e) => {
        setUsuario(e.target.value);
        
    }

    //Solo una vez al inciar
    useEffect(()=>{
        console.log("Has cargado el componente con effect")
    },[])
    //Solo al modificar el usuario
    useEffect(()=>{
        console.log("Has cargado el componente con effect")
    },[usuario])

  return (
    <div>
            <h1>Como usar UseEffect - Hook UseEffect</h1>
            <strong>{usuario}</strong>
            <form>
                <input 
                    type="text" 
                    onChange={modUsuario}
                    placeholder="Cambiar nombre"
                    />
                <input type="text" />
            </form>
    </div>
  )
}
