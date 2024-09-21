# ReactRouter-6

url ReactRouter: [](https://reactrouter.com/en/main)
url Vite: [](https://vitejs.dev/)

1. Instalar React con Vite: En la Terminal "npm create vite@latest"
2. Instalar ReactRouter6: En la Terminal "npm install react-router-dom"
3. En App.jsx se importa:
    import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
4. En la carpeta "src", se crean las carpetas "components" y " pages"; y dentro de la carpeta "pages" se crea el file "Home.jsx"
5. En "App.js"  se importa "Home" y pone en forma de componente: `{<Home/>}`
6. Asimismo, dentro de la carpeta "pages" se crean los files "Acerca.jsx" y " Contacto.jsx"
7. En "App.js"  se importa "Acerca" y "Contacto", y se ponen en forma de componentes: `{<Acerca/>} y {<Contacto/>}`
8. En "App.css" se dá un poco de estilos a `<nav`
9. En la carpeta "componentes" se crea el file "Header.jsx" y allí se traslada el "header" del file "App.jsx"
10. En la carpeta "componentes" se crea el file "Menu.jsx" y allí se traslada el "nav" del file "App.jsx"
11. En la carpeta "componentes" se crea el file "Error404.jsx" y se pone en forma de componente `{<Error404/>}`
12. En la carpeta "pages" se crea el file "Productos.jsx" y se pone en forma de componente `{<Productos />}` en "App.jsx"
13. En el file "Productos.jsx" se crea una Lista de productos y se hace el mapeo de los mismos.

## Segunda Parte del ejemplo: Detalle del Producto

1. En la carpeta "pages" se crea el file "ProductoDetalle.jsx" y se importa `{useParams}`, que va a detectar las variables que vienen por la url
2. En App.jsx se renderiza `{<ProductoDetalle/>}`, se ve el "Detalle del producto" pero se pierde la "Lista de Productos"
3. Para poder recuperar y ver la lista de productos, se usa "useNavigate", y se crea una función y un botón para obtener la lista.

### Tercera Parte: Refactorizando código con el Estado, con `{useState}`

1. En App.jsx de importa `{useState}` y dentro de la destructuración se incluye el "Listado de Productos" que se encontraba en el file "Productos.jsx".
2. En App.jsx, dentro de las `<Route`  de productos, y en element se añade productos={productos}
            `<Route
            path="/productos"
            element={<Productos productos={productos} />}
            />
            <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
            />
            `
3. En "ProductoDetalle.jsx", se elimina la `function obtenerProducto()` y se simplifica el código.

### Cuarta Parte: Rutas Anidadas: Definición de Rutas y componente Outlet

1. En "Menu.jsx" se añade: `<Link to="/servicios">Servicios</Link>`
2. En "App.jsx" se crea la "Route" de Servicios, y dentro de ella se crean otras "Route" llamadas "Home de Servicios", "Garantia de los Servicios" y "Lista de Servicios":
    `<Route path="/servicios" element={<Servicios />}>
    <Route index element={<h2>Home de Servicios</h2>} />
            <Route
              path="/servicios/garantia"
              element={<h2>Garantia de nuestros Servicios</h2>}
            />
            <Route
              path="/servicios/lista"
              element={<h2>Lista de los Servicios</h2>}
            />
    </Route>`
1. En la carpeta "pages" se crea un file "Servicios.jsx" y se le añade `<Outlet/>`

### Quinta Parte: Rutas Anidadas: Anidamiento de subrutas

1. En "Servicios.jsx" se crea un `<nav></nav>` con className="menu" y dentro del "nav" se crea varios "links" `<Link></Link>`

    `<nav className="menu">`
        `<Link to="/servicios">Inicio</Link>`
        `<Link to="/servicios/lista">Lista</Link>`
        `<Link to="/servicios/garantia">Garantia</Link>`
        `<Link to="/servicios/politica">Politica</Link>`
    `</nav>`
2. En App.jsx se añade la route de politicas:
        `<Route path="/servicios/politicas" element={<h2>Politicas de los Servicios</h2>} /></Route>`
3. En la carpeta "pages" se crean los files "ServiciosGarantia.jsx, ServiciosHome.jsx, ServiciosLista.jsx y ServiciosPoliticas.jsx" y se añaden ls "Route" en App.jsx

### Sexta Parte: Rutas Anidadas: Anidamiento de rutas y paso de parámetros

1. En la carpeta "pages" se crea el file "ServicioDetalle.jsx" con una estructura similar al file "ProductoDetalle.jsx"
2. En "App.jsx" se le crea un "Route" a "ServicioDetalle"
3. En una segunda etapa de esta sexta parte, en el file "ServicioDetalle.jsx", se eliminan: la "function handleGoBack", ya no se importa "import {useNavigate}" y se elimina "const navigate = useNavigate()"

### `<HashRouter>`

url de HashRouter: [](https://reactrouter.com/en/main/router-components/hash-router#hashrouter)

`<HashRouter>` is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, <HashRouter> makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.

    import * as React from "react";
    import * as ReactDOM from "react-dom";
    import { HashRouter } from "react-router-dom";

    ReactDOM.render(
    <HashRouter>
        {/* The rest of your app goes here */}
    </HashRouter>,
    root
    );

    function App() {
        return (
            <HashRouter basename="/app">
            <Routes>
                <Route path="/" /> {/* 👈 Renders at /#/app/ */}
            </Routes>
            </HashRouter>
        );
    }

