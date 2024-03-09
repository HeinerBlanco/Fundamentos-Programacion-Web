function menu() {
    let seleccion = document.getElementById('opciones').value;

    switch (seleccion) {
        case "1":
            window.open("https://www.visitcostarica.com/es/costa-rica/things-to-do/adventure/hiking-costa-rica");
            break;
        case "2":
            window.open("https://www.adventureparkcr.com/es/nuestros-servicios/rappel");
            break;
        case "3":
            window.open("https://costarica.org/es/actividades/rafting/");

            break;
        default:
            alert("Seleccione una opción");
    }
}
