document.addEventListener("DOMContentLoaded", function() {
    var colorDropdown = document.getElementById('color');
    var imagen = document.getElementById('imagen');
    
    colorDropdown.addEventListener('change', function() {
        mostrarImagen(colorDropdown.value);
    });

    function mostrarImagen(color) {  
        var imagenSrc; 
        
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
        
        imagen.src = imagenSrc;
    }
});
