import React, { useState } from 'react';

export const FormularioComponent = () => {
    
    const [usuario, setUsuario] = useState({});

    const getFormData = (e) => {
        e.preventDefault();
        let target = e.target;
        
        let usuario = {
            nombre: target.nombre.value,
            apellidos: target.apellidos.value,
            genero: target.genero.value,
            biografia: target.biografia.value
        }

        setUsuario(usuario);
    }

    const cambiarDatos = (e) => {
        e.preventDefault();
        var target_nombre = e.target.name;

        setUsuario({...usuario, [target_nombre]: e.target.value});
    }

    return(
        <div>
            <h1>Formularios con React</h1>

            {usuario.biografia && usuario.biografia.length > 0 &&
            (<div>
                {usuario.nombre} {usuario.apellidos} es un {usuario.genero} 
                <p>y su biografia es:</p>
                <p>{usuario.biografia}</p>
            </div>)
            }

            <form onSubmit={getFormData}>
                <input 
                    name='nombre' 
                    type='text' 
                    placeholder='Nombre' 
                    onChange={cambiarDatos}/>
                <input 
                    name='apellidos' 
                    type='text' 
                    placeholder='Apellidos'
                    onChange={cambiarDatos}/>
                <select 
                    name='genero'
                    onChange={cambiarDatos}>
                    <option value='hombre'>Hombre</option>
                    <option value='mujer'>Mujer</option>
                </select>
                <textarea 
                    name='biografia' 
                    placeholder='Biografia'
                    onChange={cambiarDatos}></textarea>
                <input type='submit' value='Enviar'/>
            </form>
        </div>
    )
}