import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-1 ">
      <ul className="nav justify-content-center border-bottom pb-2 mb-2">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link px-2 active text-danger fw-bold'
                : 'nav-link px-2'
            }
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link px-2 active text-danger fw-bold'
                : 'nav-link px-2'
            }
            to="/tablas"
          >
            Tablas de Multiplicar
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link px-2 active text-danger fw-bold'
                : 'nav-link px-2'
            }
            to="/sumas"
          >
            Sumas de Quebrados
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav-link px-2 active text-danger fw-bold'
                : 'nav-link px-2'
            }
            to="/multiplicacion"
          >
            Multiplicación de Decimales
          </NavLink>
        </li>
      </ul>
      <p className="text-center text-body-secondary mb-0">
        © 2023 Desarrollo Web, UMG
      </p>
      <p className="text-center text-body-secondary">
        Desarrollado por:{' '}
        <a
          href="https://github.com/Juanjo21-01/desarrollo-matematicas"
          target="_blank"
          rel="noreferrer"
                  className="text-decoration-none text-danger fw-bold"
                  title='Ir al repositorio de GitHub'
        >
          Juan José López
        </a>
      </p>
    </footer>
  );
};

export default Footer;
