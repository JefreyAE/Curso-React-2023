import React, { useEffect, useState, useRef } from 'react'

export const Ejemplo = () => {

    const [numeroSaludos, setNumeroSaludos] = useState(0);
    const saludosEnCola = useRef(numeroSaludos);

    const enviarSaludo = (e) => {
        console.log('Saludo enviado');
        setNumeroSaludos(numeroSaludos + 1);
    }

    useEffect(()=>{
        saludosEnCola.current = numeroSaludos;
        setTimeout(()=>{
            console.log("Mensajes en cola: "+ saludosEnCola.current);
        },2000)
    },[numeroSaludos])

    return (
        <div>
            <h1>Ejemplo con useRef</h1>

            <h2>Saludos enviados: {numeroSaludos}</h2>
            <button onClick={enviarSaludo}>Enviar saludo</button>
            <hr/>
        </div>
    )
}
