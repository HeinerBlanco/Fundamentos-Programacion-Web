'use strict';
// Función para buscar productos
function buscarProducto() {
    let searchInput = document.getElementById("inputBuscar").value.toLowerCase();

    // Base de datos de productos
    let productos = {
        "teclado": [
            { nombre: "Teclado Razer", descripcion: "Teclado mecánico para gaming", precio: "$100", imagen: "imagenes/reto10/tecladorazer.jpg" },
            { nombre: "Teclado Logitech", descripcion: "Teclado inalámbrico ergonómico", precio: "$80", imagen: "imagenes/reto10/tecladologitech.jpg" },
            { nombre: "Teclado Corsair", descripcion: "Teclado RGB con switches Cherry MX", precio: "$120", imagen: "imagenes/reto10/tecladocorsair.jpg" }
        ],
        "mouse": [
            { nombre: "Ratón Razer", descripcion: "Ratón ergonómico para gaming", precio: "$80", imagen: "imagenes/reto10/mouserazer.jpg" },
            { nombre: "Ratón Logitech", descripcion: "Ratón inalámbrico con sensor óptico", precio: "$60", imagen: "imagenes/reto10/mouselogitech.jpg" },
            { nombre: "Ratón Corsair", descripcion: "Ratón con iluminación RGB", precio: "$70", imagen: "imagenes/reto10/mousecorsair.jpg" }
        ],
        "monitor": [
            { nombre: "Monitor ASUS", descripcion: "Monitor IPS de 24 pulgadas", precio: "$200", imagen: "imagenes/reto10/monitorasus.jpg" },
            { nombre: "Monitor Samsung", descripcion: "Monitor curvo de 27 pulgadas", precio: "$300", imagen: "imagenes/reto10/monitorsamsung.jpg" },
            { nombre: "Monitor LG", descripcion: "Monitor ultrawide de 34 pulgadas", precio: "$400", imagen: "imagenes/reto10/monitorlg.jpg" }
        ],
        "audifonos": [
            { nombre: "Audífonos Razer", descripcion: "Audífonos inalámbricos para gaming", precio: "$150", imagen: "imagenes/reto10/audifonosrazer.jpg" },
            { nombre: "Audífonos Logitech", descripcion: "Audífonos con cancelación de ruido", precio: "$100", imagen: "imagenes/reto10/audifonoslogitech.jpg" },
            { nombre: "Audífonos Corsair", descripcion: "Audífonos con sonido envolvente 7.1", precio: "$120", imagen: "imagenes/reto10/audifonoscorsair.jpg" }
        ],
        "webcam": [
            { nombre: "Webcam Razer", descripcion: "Webcam con resolución Full HD", precio: "$80", imagen: "imagenes/reto10/webcamrazer.jpg" },
            { nombre: "Webcam Logitech", descripcion: "Webcam con lente Carl Zeiss", precio: "$100", imagen: "imagenes/reto10/webcamlogitech.jpg" },
            { nombre: "Webcam Corsair", descripcion: "Webcam con micrófono integrado", precio: "$90", imagen: "imagenes/reto10/webcamcorsair.jpg" }
        ]
    };

    // Muestra los resultados en la página
    let resultadosContainer = document.getElementById("resultados");
    // Limpiamos el contenedor de resultados
    resultadosContainer.innerHTML = "";

    // Si no se encuentra el producto, muestra un mensaje de error con SweetAlert
    if (!productos.hasOwnProperty(searchInput)) {
        Swal.fire({
            icon: "error",
            title: "Producto no encontrado",
            text: "Lo sentimos, no se encontraron resultados para el producto buscado.",
            confirmButtonText: "OK",
            confirmButtonColor: "#0063be"
        });
        return;
    }

    // Muestra los productos en pantalla
    let resultados = productos[searchInput];
    for (let i = 0; i < resultados.length; i++) {
        let producto = resultados[i];

        // Creamos un card con la información del producto
        let card = `
            <div class="col-sm-12 col-md-3 col-lg-3 mx-3">
                <div id="fondofotos" class="card text-center ">
                    <img id="fotos" src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
                    <div class="card-body ">
                        <h2 class="card-title ">${producto.nombre}</h2>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                    </div>
                </div>
            </div>`;

        // Agregamos los card con el += para que no se sobreescriban
        resultadosContainer.innerHTML += card;
    }
}
