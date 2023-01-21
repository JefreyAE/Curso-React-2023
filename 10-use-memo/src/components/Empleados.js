import React, { useEffect, useState } from 'react'

export const Empleados = React.memo((props) => {

  const [empleados, setEmpleados] = useState([]);

  const conseguirEmpleados = async(page) => {
    const url = `https://reqres.in/api/users?page=${page}`;
    const request = await fetch(url);
    const {data: empleados} = await request.json();
    setEmpleados(empleados);
    console.log('Peticion');
  }

  
  useEffect(()=>{
    conseguirEmpleados(props.pageNumber);
    props.mensaje();
  },[props.pageNumber])
  

  useEffect(() =>{
    console.log('Renderizado de Empleados');
  },[empleados]);

 

  return (
    <div>
        <h2>Los usuario son gestionados</h2>
        <h3>Empleados</h3>
        <ul>
          {empleados.length >= 1 && empleados.map((empleado, index) => {
            return(
              <li key={index}>{empleado.first_name}</li>
            )
          })}
        </ul>

    </div>
  )
});
