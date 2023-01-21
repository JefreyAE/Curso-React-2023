import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';
import { UseStateComponent1 } from './UseStateComponent1';
import { UseEffectComponent } from './UseEffectComponent';
import { AppRouter } from './routing/AppRouter';
import { PruebaContext } from './context/PruebaContext';
import { Ejercicio1 } from './components/Ejercicio1';
import { AJAXComponet } from './components/AJAXComponent';

function App() {

  const ficha = {
    altura: 1.86,
    peso: 72,
    condicion: "Buena"
  }

  const year = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <PruebaContext.Provider value={ficha}>
          <AppRouter/>
        </PruebaContext.Provider>
        {/*Este es un comentario*/}
      </header>
      <section className='content'>
        <AJAXComponet/>
      </section>
      <section className='content'>
        <Ejercicio1 year={year.getFullYear()}/>
      </section>
    </div>
  );
}

export default App;
