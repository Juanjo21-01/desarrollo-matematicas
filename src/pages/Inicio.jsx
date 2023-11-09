import Modales from '../components/Modales';

export default function Inicio() {
  return (
    <>
      <h1 className="text-danger fs-1 text-center py-4">
        Matemáticas para nivel Primario y Preprimario
      </h1>

      <p className="text-primary-emphasis">
        Proyecto final del curso de Desarrollo Web, que consta de una página web
        con información de las tablas de multiplicar, suma de quebrados y
        multiplicación de decimales.
      </p>

      <article className="text-center">
        <img
          src="/desarrollo-matematicas/img/umg.png"
          alt="logo umg"
          className="img-fluid"
        />
      </article>

      {/* Ventanas Modales */}
      <Modales />
    </>
  );
}
