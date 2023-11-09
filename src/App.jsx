import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navegacion from './components/Navegacion';
import { Inicio, Multiplicacion, Sumas, Tablas } from './pages';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Enrutamiento */}
      <HashRouter>
        {/* Navegacion */}
        <Navegacion />

        {/* Contenido */}
        <div className="container">
          {/* Rutas */}
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Inicio />} />

            {/* Ruta de tablas de multiplicar */}
            <Route path="/tablas" element={<Tablas />} />

            {/* Ruta de sumas de quebrados */}
            <Route path="/sumas" element={<Sumas />} />

            {/* Ruta de multiplicación de decimales */}
            <Route path="/multiplicacion" element={<Multiplicacion />} />

            {/* Redireccionar */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {/* Pie de página */}
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
