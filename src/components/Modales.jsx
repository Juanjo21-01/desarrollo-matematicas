import Modal from './Modal';

const Modales = () => {
  // variables para activar el modal
  const nameModal = 'tablas';
  const nameModal2 = 'sumas';
  const nameModal3 = 'multiplicacion';

  return (
    <article className="row my-5 ">
      <section className="col-12 d-flex justify-content-evenly mb-5 flex-wrap gap-2">
        {/* Ventana Modal de las tablas de multiplicar*/}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#${nameModal}`}
        >
          Tablas de Multiplicar
        </button>

        <Modal nameModal={nameModal}>
          <h3 className="text-success">Tablas de Multiplicar</h3>
          <p>Aprende las tablas de multiplicar del 1 al 10!!!</p>
          <img
            src="/src/assets/tablas.jpg"
            alt="tablas de multiplicar"
            className="img-fluid w-75"
          />
        </Modal>

        {/* Ventana Modal de sumas de quebrados */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#${nameModal2}`}
        >
          Suma de Quebrados
        </button>

        <Modal nameModal={nameModal2}>
          <h3 className="text-success">Suma de Quebrados</h3>
          <p>¿Ya sabes sumar con fracciones? Sino, aquí puedes aprender!!</p>
          <img
            src="/src/assets/sumas.webp"
            alt="sumas de quebrados"
            className="img-fluid w-75"
          />
        </Modal>

        {/* Ventana Modal de multiplicaciones con decimales */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#${nameModal3}`}
        >
          Multiplicación de Decimales
        </button>

        <Modal nameModal={nameModal3}>
          <h3 className="text-success">Multiplicación de Decimales</h3>
          <p>Es muy fácil multiplicar con decimales, aprende ya!!</p>
          <img
            src="/src/assets/multiplicacion.png"
            alt="multiplicaciones de decimales"
            className="img-fluid w-75"
          />
        </Modal>
      </section>
    </article>
  );
};

export default Modales;
