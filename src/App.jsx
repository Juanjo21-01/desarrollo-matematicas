import Modales from './components/Modales';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <>
      {/* Navegacion */}
      <Navegacion />

      <h1 className="text-primary fs-1 text-center pt-2">
        Matemáticas para nivel Primario y Preprimario
      </h1>

      <p className="text-primary-emphasis">
        Proyecto final del curso de Desarrollo Web, que consta de una página web
        con información de las tablas de multiplicar, suma de quebrados y
        multiplicación de decimales.
      </p>

      <article className="text-center">
        <img src="/src/assets/umg.png" alt="logo umg" className="img-fluid" />
      </article>

      {/* Ventanas Modales */}
      <Modales />
    </>
  );
}

export default App;
