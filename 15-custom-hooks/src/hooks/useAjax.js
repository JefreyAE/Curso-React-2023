import {useState, useEffect} from 'react'

export const useAjax = (url = "") => {

    const [estado, setEstado] = useState({
        datos: null,
        cargando: true
      });
    
      const fetchData = async(customUrl) => {
        setEstado({...estado, cargando: true});
        const peticion = await fetch(customUrl ? customUrl : url);
        const {data} = await peticion.json();
        data && setEstado({datos: data, cargando: false});
      }
    
      useEffect(() => {
        fetchData(url);
      }, [url])

  return {
    fetchData,
    estado
  }
}
