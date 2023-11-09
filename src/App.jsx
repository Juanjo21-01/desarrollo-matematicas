import Navegacion from './components/Navegacion';
import Inicio from './pages/Inicio';

function App() {
  return (
    <>
      {/* Navegacion */}
      <Navegacion />

      {/* Enrutamiento */}
      <div className="container">
        <Inicio />
      </div>
    </>
  );
}

export default App;
