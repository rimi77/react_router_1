// Sexta Parte: Rutas Anidadas: Anidamiento de rutas y paso de parámetros
import { Link } from "react-router-dom";

export function ServiciosLista({ servicios }) {
  return (
    <>
      <h2>Conoce nuestros servicios</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <Link to={`/servicios/${servicio.id}`}>{servicio.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// trabaja con el file "App-13.jsx, App.css", los files "Acerca-1.jsx, Contacto-1.jsx, Home-1.jsx, Productos-4.jsx, ProductoDetalle-4.jsx, Error404.jsx, Servicios-2.jsx, ServicioDetalle-1.jsx, ServiciosGarantia-1.jsx, ServiciosHome-1.jsx, ServiciosLista-2.jsx y ServiciosPoliticas-1.jsx" de la carpeta "pages" y los files "Header-1.jsx y Menu-3.jsx" de la carpeta "components"

// Sexta Parte: Rutas Anidadas: Anidamiento de rutas y paso de parámetros
