// Cuarta Parte: Rutas Anidadas: Definición de Rutas y componente Outlet
import { useNavigate, useParams } from "react-router-dom";

export function ProductoDetalle({ productos }) {
  function handleGoBack() {
    navigate(-1);
  }

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(useParams()); //useParams es un objeto

  const producto = productos.find((producto) => producto.id.toString() === id);

  return (
    <section>
      <h1>Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
      <h2>{producto.id}</h2>
      <h2>${producto.precio}</h2>
      <button onClick={handleGoBack}>Regresar</button>
    </section>
  );
}

// trabaja con el file "App-11.jsx, App.css", los files "Acerca-1.jsx, Contacto-1.jsx, Home-1.jsx, Productos-4.jsx, ProductoDetalle-4.jsx, Error404.jsx y Servicios-1.jsx" de la carpeta "pages" y los files "Header-1.jsx y Menu-3.jsx" de la carpeta "components"

// Cuarta Parte: Rutas Anidadas: Definición de Rutas y componente Outlet
