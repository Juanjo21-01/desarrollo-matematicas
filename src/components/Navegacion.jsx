import { NavLink } from 'react-router-dom';

const Navegacion = () => {
  console.log('Navegacion');
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-gradient bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Matemáticas
        </NavLink>

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
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active text-danger fw-bold' : 'nav-link'
                }
                to="/tablas"
              >
                Tablas de Multiplicar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active text-danger fw-bold' : 'nav-link'
                }
                to="/sumas"
              >
                Sumas de Quebrados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active text-danger fw-bold' : 'nav-link'
                }
                to="/multiplicacion"
              >
                Multiplicación de Decimales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
