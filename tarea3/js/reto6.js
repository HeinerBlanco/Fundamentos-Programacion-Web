
// obtenemos el valor del select y lo guardamos en una variable
document.addEventListener("DOMContentLoaded", function() {
    var colorDropdown = document.getElementById('color');
    var imagen = document.getElementById('imagen');
    
    // evento que se dispara cuando el valor del select cambia
    colorDropdown.addEventListener('change', function() {
        mostrarImagen(colorDropdown.value);
    });

    // función que muestra la imagen según el color seleccionado
    function mostrarImagen(color) {  
        var imagenSrc; 
        
        // define la imagen según el color seleccionado
        if (color === "1") {
            imagenSrc = "imagenes/colores/rosada.jpg";
        } else if (color === "2") {
            imagenSrc = "imagenes/colores/naranja.jpg";
        } else if (color === "3") {
            imagenSrc = "imagenes/colores/verde.jpg";
        } else if (color === "4") {
            imagenSrc = "imagenes/colores/amarillo.jpg";
        } else {
            imagenSrc = "imagenes/colores/amarillo.jpg";
        }
        
        // cambia la imagen
        imagen.src = imagenSrc;
    }
});
