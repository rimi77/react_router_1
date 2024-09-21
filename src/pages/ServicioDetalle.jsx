// Sexta Parte: Rutas Anidadas: Anidamiento de rutas y paso de parámetros - Final
import { useParams } from "react-router-dom";

export function ServicioDetalle({ servicios }) {
  const { id } = useParams();
  console.log(useParams());

  const servicio = servicios.find((servicio) => servicio.id.toString() === id);

  return (
    <section>
      <h1>Detalle del Servicio</h1>
      <h2>{servicio.nombre}</h2>
      <h2>{servicio.id}</h2>
      <h2>${servicio.precio}</h2>
    </section>
  );
}

// trabaja con el file "App-14.jsx, App.css", los files "Acerca-1.jsx, Contacto-1.jsx, Home-1.jsx, Productos-4.jsx, ProductoDetalle-4.jsx, Error404.jsx, Servicios-2.jsx, ServicioDetalle-2.jsx, ServiciosGarantia-1.jsx, ServiciosHome-1.jsx, ServiciosLista-2.jsx y ServiciosPoliticas-1.jsx" de la carpeta "pages" y los files "Header-1.jsx y Menu-3.jsx" de la carpeta "components"

// Sexta Parte: Rutas Anidadas: Anidamiento de rutas y paso de parámetros -Final
