import './App.css';
import ComponenteA from './components/container/componenteA';
import { Contacto } from "../src/models/contacto.class";

function App() {

  const defaultContacto = new Contacto('Maria', 'Gutierrez', 'mgutierrez@mail.com', false)

  return (
    <div className="App">
      <header className="App-header">
        <ComponenteA contacto = { defaultContacto }></ComponenteA>
      </header>
    </div>
  );
}

export default App;
