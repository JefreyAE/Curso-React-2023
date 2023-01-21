import React, { useEffect, useRef, useState } from 'react';
import {useMayus} from '../hooks/useMayus';

export const CustomHooks = () => {

    const [texto, setTexto] = useState("");

    const {estadoMayus, estadoMinus, estadoConcat, mayusculas, minusculas, concatenar} = useMayus(texto);

    const inputText = useRef();

    useEffect(()=>{
        mayusculas();
        minusculas();
        concatenar(" concatenado");
    }, [texto]);

  return (
    <div>
        <h1>Usando custom hooks</h1>

        <h2>En mayusculas: {estadoMayus}</h2>
        <h2>En minusculas: {estadoMinus}</h2>
        <h2>Concatenado: {estadoConcat}</h2>

        <input type="text" ref={inputText} name='inputText' onChange={() => setTexto(inputText.current.value)}/>
    </div>
  )
}
