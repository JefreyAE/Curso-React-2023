import logo from './logo.svg';
import './App.css';
import { CustomHooks } from './components/CustomHooks';
import { FormularioComponent } from './components/FormularioComponent';
import { MiUsuario } from './components/MiUsuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CustomHooks/> */}
        {/* <FormularioComponent /> */}
        <MiUsuario/>
      </header>
    </div>
  );
}

export default App;
