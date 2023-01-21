import React, { useState } from 'react';
import { PropTypes } from 'prop-types'

export const Ejercicio1 = (props) =>{

    const [year, setYear] = useState(props.year);

    const siguiente = () => {
        setYear(year + 1);
    }    

    const anterior = () => {
        setYear(year - 1);
    } 

    const setByInput = (e) => {
        let dato = parseInt(e.target.value);

        if(Number.isInteger(dato)){
            setYear(dato)
        }else{
            setYear(props.year)
        }
        
    }

    return (
        <div>
            <h1>Ejercicio 1</h1>
            <h2>El año es: {year}</h2>
            <button onClick={anterior}>Año anterior</button>
            <button onClick={siguiente}>Proximo año</button>
            <p>
                <input type='text' onChange={e => setByInput(e)}></input>
            </p>  
        </div>
    )
}

Ejercicio1.propTypes = {
    year: PropTypes.number.isRequired
}