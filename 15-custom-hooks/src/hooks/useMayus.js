import { useState } from 'react';

export const useMayus = (text) => {

    const [estadoMayus, setMayus] = useState(text);
    const [estadoMinus, setMinus] = useState(text);
    const [estadoConcat, setConcat] = useState(text);

    const mayusculas = () => {
        setMayus(text.toUpperCase())
        return text.toUpperCase();
    }

    const minusculas = () => {
        setMinus(text.toLowerCase())
        // return text.toLowerCase();
    }

    const concatenar = (textConcat = "") => {
        setConcat(text + textConcat)
        // return (text + textConcat);
    }

    return {
        mayusculas,
        minusculas,
        concatenar,
        estadoMayus: estadoMayus,
        estadoMinus: estadoMinus,
        estadoConcat: estadoConcat
    }
}