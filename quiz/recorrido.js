
//variables controladoras
var panorama, viewer,container,zona;

//obtener una referencia al contenedor donde se mostrará el panorama 3D
container = document.querySelector( '#img360' );

//crear un nuevo panorama 3D 360
panorama=new PANOLENS.ImagePanorama( 'recurso/imagenes/tienda.jpg' );



// zona 1

var zona1 = new PANOLENS.Infospot( 40, 'recurso/imagenes/infoicon1.png' );
//establecen las coordenadas del visor 3D en x,y,z posicion tridiensionaldel infospot dentro del panorama 3D
zona1.position.set( -322,-46,-500 );
//-60 segundos indica que el infospot se mostrara por 60 segundos o que el usuario lo cierre
zona1.addHoverText( 'Monitor HP ' -2);
zona1.element.innerHTML= '<div  style="background-color: #04B431; color:#fff; border-radius: 10px; padding: 15px; font-size: 16px; width: 300px;"><strong class="text-black">MONITORES HP</strong><br>Diseñados para funcionar perfectamente con su equipo <br>•	Solución integral completa <br>• Se adaptan a la perfección a equipos de sobremesa y portátiles <br>• Soluciones de software incluidas</div>';
panorama.add( zona1 );



//zona 2

var zona2 = new PANOLENS.Infospot(40, 'recurso/imagenes/infoicon2.png');

zona2.position.set(171, -47, -500);

zona2.addHoverText('Monitor UltraDelgado', -60);

zona2.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; ">"MONITOR ULTRATHIN"</div> <br> <img src="recurso/imagenes/ULTRATHIN.png" alt="" style="width:300px;height: 250px"><br>';

panorama.add(zona2);





//ZONA3

var zona3 = new PANOLENS.Infospot(80, 'recurso/imagenes/videoicon.png');
zona3.position.set(500,-350,358);

zona3.addHoverText('La biblioteca ', -60,);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
zona3.element.innerHTML = `
    <div style="top:0">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/WadBmI0-01w?si=JOJK3JE-CbCrq3ys" allowfullscreen></iframe>        
    </div>
`;
panorama.add(zona3);



//ZONA4

var zona4 = new PANOLENS.Infospot(50, 'recurso/imagenes/infoicon3.png');
// Crea y agrega el cuarto infospot con un ícono personalizado
zona4.position.set(206,-358,500);
//evento hover
zona4.addHoverText('Alfombra ', -60);
zona4.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">"ALFOMBRAS PARA OFICINA"</div> <br> <img src="recurso/imagenes/ALFOMBRA.jpg" alt="" style="width:500px;height: 600px">';
panorama.add(zona4);


// Crea y agrega el quinto infospot
var zona5 = new PANOLENS.Infospot(30, 'recurso/imagenes/infoicon4.png');
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
zona5.position.set(500,28,436);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
zona5.addHoverText('Lampara .', -30);
zona5.element.innerHTML = '<div class=" lottie text-center "><lottie-player src="https://lottie.host/8751ade5-ab27-4d3f-aadd-8737f1364566/GLHmxFmXpH.json"background="transparent" speed="1" style="width: 200px; height: 200px;margin-bottom:150px;margin-right:450px" loop autoplay "></lottie-player></div>'
;
panorama.add(zona5);



//zona 6

// Crea y agrega el sexto infospot
var zona6 = new PANOLENS.Infospot(50, 'recurso/imagenes/musica.png');
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
zona6.position.set(-500,66,332);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
zona6.addHoverText('', -60);
zona6.element.innerHTML = '<div><audio controls><source src="recurso/pianojazz.mp3" type="audio/mpeg"></audio></div>';
panorama.add(zona6);




// zona 7

// Crea y agrega el infospot con la imagen del logo y el enlace
var zona7 = new PANOLENS.Infospot(140, 'recurso/imagenes/logo1.png');
zona7.position.set(-25, 17, 500);
zona7.addHoverText('Haz clic para Empezar', -60);
zona7.element.innerHTML= '<br><br><div class="text-center text-black" style="height: 50px;width: 200px;font-weight: bold;"><br><h4>Haz clic para ir a la tienda</h4></div>';
zona7.addEventListener('click', function () {
    window.location.href = 'recurso/tarea2/index.html';
});
panorama.add(zona7);

// Crea y agrega el visor 3D
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);


function init(elemid) {
    let canvas = document.getElementById(elemid);
    c= canvas.getContext('2d');
    w= (canvas.width = window.innerWidth);
    h= (canvas.height = window.innerHeight);
    c.fillStyle = 'rgba(30,30,30,1)';
    c.fillRect(0,0,w,h);
    return{c:c,canvas:canvas};
}