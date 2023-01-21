import {useState} from 'react';


export const useForm = (formInit = {}) => {

  const [formulario, setFormulario] = useState(formInit);

  const serializarFormulario = (formulario) =>{
    const formData = new FormData(formulario);
    let objeto = {};

    for(let [name, value] of formData){
      objeto = {...objeto, [name]:value};
    }
    return objeto;
  }

  const cambiado = ({target})=>{
    const {name, value} = target;
    setFormulario({...formulario, [name]: value});
  }

  const enviarFormulario = (e) => {
    e.preventDefault();
    
    let curso = serializarFormulario(e.target);
    setFormulario(curso);

    document.querySelector(".codigo").classList.add("enviado");
  }

    return{
        formulario,
        enviarFormulario,
        cambiado
    }
}
