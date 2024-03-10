window.onload = function() {
    var estilo;
    var tamano;

    document.getElementById('estilo').onchange = function(e) {
        estilo = e.target.value;
        mostrarImagen(estilo);
    };

    document.getElementById('tamano').onchange = function(e) {
        tamano = e.target.value;
    };

    document.getElementById('mostrarBtn').onclick = function() {
        if (!estilo || !tamano) {
            Swal.fire({
                title: 'Oops... Faltan datos',
                confirmButtonText: "Intentar de nuevo",
                html: '<iframe src="https://lottie.host/embed/35036655-3061-46cd-bf2d-4e9bccefb40a/KcQ9a6dQnV.json"></iframe><br>"Todos los campos son obligatorios"',
            });
            return;
        }
        mostrarTamano(estilo, tamano);
    };
};

function mostrarImagen(estilo) {
    var imagen;

    switch (estilo) {
        case "Caliente":
            imagen = "imagenes/yeti/caliente-mini.png";
            break;
        case "Frio":
            imagen = "imagenes/yeti/fria-mini.png";
            break;
        case "Vino":
            imagen = "imagenes/yeti/vino-mini.png";
            break;
        default:
            imagen = "imagenes/yeti/variasyeti.png"; 
            break;
    }

    document.getElementById('imagen').src = imagen;
}

function mostrarTamano(estilo, tamano) {
    // variable que guarda la imagen según el estilo seleccionado
    let imagenDireccion = "imagenes/yeti/" + estilo.toLowerCase() + ".png";

    // Muestra el mensaje utilizando SweetAlert
    Swal.fire({
        imageUrl: imagenDireccion,
        html: "<p> Yeti para  " + estilo + " de " + tamano + "<br><br> <strong> Precio :</strong></p> $" + obtInfo(estilo, tamano).toFixed(2),     
    });
}

function obtInfo(estilo, tamano) {
    var precio;

    switch (estilo) {
        case "Caliente":
            switch (tamano) {
                case "10 oz":
                    precio = 20.00;
                    break;
                case "20 oz":
                    precio = 25.00;
                    break;
                case "30 oz":
                    precio = 30.00;
                    break;
            }
            break;
        case "Frio":
            switch (tamano) {
                case "10 oz":
                    precio = 25.00;
                    break;
                case "20 oz":
                    precio = 30.00;
                    break;
                case "30 oz":
                    precio = 35.00;
                    break;
            }
            break;
        case "Vino":
            switch (tamano) {
                case "10 oz":
                    precio = 30.00;
                    break;
                case "20 oz":
                    precio = 35.00;
                    break;
                case "30 oz":
                    precio = 40.00;
                    break;
            }
            break;
    }

    return precio;
}

// limpiar todos los campos
function limpiar() {
    // Restablece las opciones del select de estilo
    var selectEstilo = document.getElementById('estilo');
    selectEstilo.selectedIndex = 0;

    // Restablece las opciones del select de tamaño
    var selectTamano = document.getElementById('tamano');
    selectTamano.selectedIndex = 0;

    // Restablece la imagen
    document.getElementById('imagen').src = "imagenes/yeti/variasyeti2-removebg-preview.png";  
}
