// Cuarta Parte: Rutas Anidadas: Definición de Rutas y componente Outlet
import { Link, NavLink } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/about">About</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/inexistente">Error 404</Link>
      </nav>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/acerca"
        >
          Acerca
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/contacto"
        >
          Contacto
        </NavLink>
      </nav>
    </>
  );
}

// trabaja con el file "App-11.jsx, App.css", los files "Acerca-1.jsx, Contacto-1.jsx, Home-1.jsx, Productos-4.jsx, ProductoDetalle-4.jsx, Error404.jsx y Servicios-1.jsx" de la carpeta "pages" y los files "Header-1.jsx y Menu-3.jsx" de la carpeta "components"

// Cuarta Parte: Rutas Anidadas: Definición de Rutas y componente Outlet
