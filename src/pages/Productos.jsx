// Cuarta Parte: Rutas Anidadas: Definición de Rutas y componente Outlet
import { Link } from "react-router-dom";

export function Productos({ productos }) {
  return (
    <section>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// trabaja con el file "App-11.jsx, App.css", los files "Acerca-1.jsx, Contacto-1.jsx, Home-1.jsx, Productos-4.jsx, ProductoDetalle-4.jsx, Error404.jsx y Servicios-1.jsx" de la carpeta "pages" y los files "Header-1.jsx y Menu-3.jsx" de la carpeta "components"

// Cuarta Parte: Rutas Anidadas: Definición de Rutas y componente Outlet
