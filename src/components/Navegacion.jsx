const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-gradient bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Inicio
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse justify-content-end" id="menu">
          <ul className="navbar-nav  mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tablas de Multiplicar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Suma de Quebrados
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Multiplicación de Decimales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
