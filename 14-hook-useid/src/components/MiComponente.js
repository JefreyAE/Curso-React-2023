import React, { useId } from 'react'

export const MiComponente = () => {

    const id = useId();
    const id2 = useId()

    console.log(id);
    console.log(id2);

    return (
        <div>
            <h1>Hook useID</h1>
            <input id={id} name="nombre" placeholder='Nombre'/>
        </div>
    )
}
