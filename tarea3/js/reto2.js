"use strict";

var sumasubTotal = 0;
var imp = 0.13;
var servicio = 0.05;

function incluir() {
    var cliente = document.getElementById("cliente").value;
    var articulo = document.getElementById("articulo").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;

    if (cliente === "" || articulo === "" || cantidad === "" || precio === "") {
        Swal.fire({
            title: 'Oops... Faltan datos',
            confirmButtonText: "Intentar de nuevo",
            html: ' <iframe src="https://lottie.host/embed/35036655-3061-46cd-bf2d-4e9bccefb40a/KcQ9a6dQnV.json"></iframe><br>"Todos los campos son obligatorios"',
        });
    } else {
        var subTotal = cantidad * precio;
        sumasubTotal += subTotal;
        var iva = sumasubTotal * imp;
        var totalservicio = sumasubTotal * servicio;
        var total = sumasubTotal + iva + totalservicio;

        var datosTabla = "<td>" + articulo + "</td><td>" + cantidad + "</td><td>" + "₡" + precio + "</td><td>" + "₡" + subTotal + "</td>";
        document.getElementById('contenidoTabla').innerHTML += "<tr>" + datosTabla + "</tr>";

        var datosTabla = "<p>" + sumasubTotal + "</p><p>" + iva + "</p><p>" + "₡" + totalservicio + "</p><p>" + "₡" + total + "</p>";

        document.getElementById('subtotal2').innerText = "₡" + sumasubTotal;
        document.getElementById('iva2').innerText = "₡" + iva;
        document.getElementById('servicio2').innerText = "₡" + totalservicio;
        document.getElementById('total2').innerText = "₡" + total;
        document.getElementById('cliente2').innerHTML = "Cliente: " + cliente;
        
        // variable para obtener la fecha y hora actual 
        var fechaActual = obtenerFechaYHora();
        document.getElementById('fecha').innerHTML = "Fecha: " + fechaActual;
    }

    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function limpiar() {
    sumasubTotal = 0;
    document.getElementById("cliente").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById('contenidoTabla').innerHTML = "";
    document.getElementById('subtotal2').innerText = "";
    document.getElementById('iva2').innerText = "";
    document.getElementById('servicio2').innerText = "";
    document.getElementById('total2').innerText = "";
    document.getElementById('cliente2').innerHTML = "";
    document.getElementById('fecha').innerHTML = "";
}

function Numeros(string) {
    var out = '';
    var filtro = '1234567890';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) !== -1)
            out += string.charAt(i);

    return out;
}

function obtenerFechaYHora() {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var ampm = horas >= 12 ? 'pm' : 'am';

    // Formatear la fecha
    var fechaFormateada = dia + "-" + mes + "-" + anio;
    // Formatear la hora
    var horaFormateada = (horas < 10 ? '0' : '') + horas + ":" + (minutos < 10 ? '0' : '') + minutos;
    
    // Retorna la fecha y hora formateada con un salto de línea y la palabra "Hora" antes de la hora y si es am o pm
    return fechaFormateada + " " + horaFormateada + " " + ampm;}

