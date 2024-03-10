
// evento que carga la función automáticamente...
window.onload = function() {
    
    // con esto carga el logo principal
    document.getElementById("portada").innerHTML = "<img src='imagenes/portadas/buscandoLibro.jpg' class='img-fluid'/>";

    // evento que permite cambiar el objeto onchange
    document.getElementById("recomendacion").onchange = function(e) {

        // variable que guarda el valor del select
        let n = e.target.value;

        // expresiones que guardan las imágenes de los libros
        let imagen = "<img src='imagenes/portadas/buscandoLibro.jpg" + n + ".jpg' class='img-fluid'/>";

        // expresiones que guardan los textos informativos de los libros
        if (n === "La Cabaña") {
            imagen = "<img src='imagenes/portadas/la_cabana.webp' class='img-fluid' alt='logo'/>";
            titulo = "<h5 class=text-info>TITULO</h5><p>La Cabaña</p>";
            autor = "<h5 class=text-info>AUTOR</h5> <p>William Paul Young </p>";
            anno = "<h5 class=text-info>AÑO</h5><p>2015 </p>";
            precio= "<h5 class=text-info>PRECIO</h5><p>¢20.000 </p>";

        } else if (n === "El Alquimista") {
            imagen = "<img src='imagenes/portadas/el_alquimista.jpg' class='img-fluid' alt='logo'/>";
            titulo = "<h5 class=text-info>TITULO</h5><p>El Alquimista</p>";
            autor = "<h5 class=text-info>AUTOR</h5> <p>Paulo Coelho</p>";
            anno = "<h5 class=text-info>AÑO</h5><p>1988</p>";
            precio= "<h5 class=text-info>PRECIO</h5><p>¢15.000 </p>";

        } else if (n === "El Principito") {
            imagen = "<img src='imagenes/portadas/el_principito.jpg' class='img-fluid' alt='logo'/>";
            titulo = "<h5 class=text-info>TITULO</h5><p>El Principito</p>";
            autor = "<h5 class=text-info>AUTOR</h5> <p>Antoine de Saint-Exupéry</p>";
            anno = "<h5 class=text-info>AÑO</h5><p>1943</p>";
            precio= "<h5 class=text-info>PRECIO</h5><p>¢10.000 </p>";

        } else if (n === "El Sutil Arte") {
            imagen = "<img src='imagenes/portadas/el_sutil.jpg' class='img-fluid' alt='logo'/>";
            titulo = "<h5 class=text-info>TITULO</h5><p>El Sutil Arte</p>";
            autor = "<h5 class=text-info>AUTOR</h5> <p>Mark Manson</p>";
            anno = "<h5 class=text-info>AÑO</h5><p>2019</p>";
            precio= "<h5 class=text-info>PRECIO</h5><p>¢25.000 </p>";

        }

        // imprime la imagen y los textos informativos en el HTML
        document.getElementById("portada").innerHTML = imagen;
        document.getElementById("titulo").innerHTML = titulo;
        document.getElementById("autor").innerHTML = autor;
        document.getElementById("anno").innerHTML = anno;
        document.getElementById("precio").innerHTML = precio;
        document.getElementById("informacion").innerHTML = "<h4>INFORMACION</h4><hr>"
    }
}


