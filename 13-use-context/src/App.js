import { useState } from 'react';
import './App.css';
import { AppRouter } from './routing/AppRouter';
import { PruebaContext } from './context/PruebaContext';

function App() {

  const usuarioLocal = JSON.parse(localStorage.getItem('usuario'));

  const [usuario, setUsuario] = useState(usuarioLocal ? usuarioLocal : {});

  const curso ={
    id: 1,
    titulo: "PHP",
    duracion: " 15 horas"
  }

  return (
    <div className="App">
      <header className="App-header">
        <PruebaContext.Provider value={{usuario, setUsuario}}>
          <AppRouter/>
        </PruebaContext.Provider>
      </header>
    </div>
  );
}

export default App;
