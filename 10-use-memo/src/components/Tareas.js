import React, { useState, useMemo } from 'react'

export const Tareas = () => {

    const [tareas, setTareas]= useState([]);
    const [contador, setContador] = useState(5000);

    const guardarTareas = (e) => {
        e.preventDefault()
        setTareas((tareas) => [...tareas, e.target.descripcion.value])
    }

    const borrarTareas = (id) => {
        // let t = tareas.pop();
        let nuevasTareas = tareas.filter((tarea, index) => id !== index);
        console.log(tareas);
        setTareas(nuevasTareas);
    }

    const sumar = () =>{
        setContador(contador + 1);
    }

    const contadoresPasados = (sumatoria) => {
        for(let i = 0 ; i <= sumatoria; i++){
            console.log("Ejecutando acumulacion de contadores del pasado...");
        }

        return `Contador manual de tareas: ${sumatoria}`;
    }

    const memoContadores = useMemo(()=>contadoresPasados(contador),[contador]);

  return (
    <div  className='tareas-container'>
        <h1>Mis tareas</h1>
        <form  onSubmit={guardarTareas}>
            <input type='text' name='descripcion'/>
            <input type='submit' value='Guardar'/>
            
        </form>

        <h3>Contador manual de tareas: {memoContadores}</h3>
        <button onClick={sumar}>Sumar</button>
        <hr/>
        <h2>Lista de tareas</h2>
        {tareas.map((tarea, index)=>{
            return(
                <li key={index}>{tarea} &nbsp;<input onClick={()=>borrarTareas(index)} type='submit' id="btn_eliminar" value='Eliminar'/>
                </li>  
            )
        })}
    </div>
  )
}
