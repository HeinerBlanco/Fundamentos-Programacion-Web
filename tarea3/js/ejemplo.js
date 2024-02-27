"use strict";
var num = 1;

function incluir() {
    var nombreTxt = document.getElementById("nombre").value;
    var apellidoTxt = document.getElementById("apellido").value;
    var salario = document.getElementById("salario").value;
    var al = document.getElementById("al").value;
    var aumento = 0;

    if (nombreTxt == "" || apellidoTxt == "" || salario == "" || al == "") {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
            imageUrl: "imagenes/logo.png",
            imageWidth: 400, 
            imageHeight: 200,
            imageAlt: 'Logotipo de la empresa',
        })
    } else {
        if (al > 5) {
            aumento = salario * 0.5;
        }
        //variable que almacena la estructura de la tabla
        //td define la celda de una tabla que contiene datos
        var datosTabla = "<td>" + num + "</td><td>" + nombreTxt + "</td><td>" + apellidoTxt + "</td><td>" + al + "</td><td>" + "₡" + salario + "</td><td>" + "₡" + aumento + "</td>";
        //crea el elemento fila
        var agregar = document.createElement("tr");
        //apunta los datos de la tabla 
        agregar.innerHTML = datosTabla;
        //agrega los datos a la tabla usando appendChild (nodo)
        document.getElementById('tabla').appendChild(agregar);
        //incrementa el id de cada registro
        num++;
    };
    //limpiar los campos input
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("al").value = "";
};



function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
    
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
         out += string.charAt(i);
    
    //Retornar valor filtrado
    return out;
} 


function limpiar() {
    //asigna 1 al campo numero
    num = 1;
    //recarga la pagina web
    location.reload();
    //limpia los campos input
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("al").value = "";
    //borra los registros y el contenido de la tabla
    document.getElementById("tabla").innerHTML = "";
}