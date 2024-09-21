// Quinta Parte: Rutas Anidadas: Anidamiento de subrutas
import { Link, Outlet } from "react-router-dom";

export function Servicios() {
  return (
    <>
      <h1>Servicios</h1>
      <nav className="menu">
        <Link to="/servicios">Inicio</Link>
        <Link to="/servicios/lista">Lista</Link>
        <Link to="/servicios/garantia">Garantia</Link>
        <Link to="/servicios/politicas">Politicas</Link>
      </nav>
      <Outlet />
    </>
  );
}

// trabaja con el file "App-12.jsx, App.css", los files "Acerca-1.jsx, Contacto-1.jsx, Home-1.jsx, Productos-4.jsx, ProductoDetalle-4.jsx, Error404.jsx, Servicios-2.jsx, ServiciosGarantia-1.jsx, ServiciosHome-1.jsx, ServiciosLista-1.jsx y ServiciosPoliticas-1.jsx" de la carpeta "pages" y los files "Header-1.jsx y Menu-3.jsx" de la carpeta "components"

// Quinta Parte: Rutas Anidadas: Anidamiento de subrutas
