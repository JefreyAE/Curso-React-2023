import React, { useEffect, useState } from 'react';

export  const AJAXComponet = () =>{

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAsyncAwait();
    },[])

    const getUsuariosAjaxPms = () =>{
        fetch("https://reqres.in/api/users?page=1")
            .then((res)=>{
                return res.json();
            })
            .then(
                data => {setUsuarios(data.data)},
                error => {console.log(error);}
                );
    }

    const getUsuariosAsyncAwait = async() => {
        setTimeout(async()=> {
            try{
                const peticion = await fetch("https://reqrddes.in/api/usersllls?page=1");
                const {data} =  await peticion.json();
    
                setUsuarios(data);
                setLoading(false);
            }catch(error){
                console.log(error);
                alert(error.message)
            }
        },1000);
        
    }

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    if(loading){
        return(
            <div>
                Cargando datos...
            </div>
        )
    }else{
        return (
            <div>
                <h2>Listado de usuarios desde un servicio externo</h2>
                <ol>
                    {usuarios.map((usuario)=>{
                        return(
                            <li key={usuario.id}><img src={usuario.avatar}/>{usuario.first_name} {usuario.last_name}</li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}