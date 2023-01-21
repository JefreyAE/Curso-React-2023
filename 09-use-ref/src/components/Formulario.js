import React, { useRef } from 'react'

export const Formulario = () => {

    const nombreInput = useRef('Jefrey');
    const apellidosInput = useRef('Arias Esquivel');
    const emailInput = useRef('jefariasj@gmail.com');

    const miCaja = useRef();

    const mostrar = e => {
        e.preventDefault();
        console.log(nombreInput.current.value);
        console.log(apellidosInput.current.value);
        console.log(emailInput.current.value);

        console.log(miCaja);
        let {current: caja} = miCaja;
        caja.classList.add('fondoVerde');
        caja.innerHTML = 'Formulario enviado';
    }

  return (
    <div>
        <h1>Aprendiendo a usar UseRef </h1>

        <div ref={miCaja} className='miCaja'>
            <h2>Pruebas con ref</h2>
        </div>

        <form onSubmit={mostrar} >
            <input type='text' placeholder='Nombre' name='nombre' ref={nombreInput}/><br/>
            <input type='text' placeholder='Apellido' name='apellidos' ref={apellidosInput}/><br/>
            <input type='email' placeholder='Email' name='email' ref={emailInput}/><br/>
            <input type='submit' value='Enviar'/>
        </form>

        <button onClick={()=>emailInput.current.select()}>Foco en email</button>
    </div>
  )
}
