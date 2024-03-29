document.addEventListener('DOMContentLoaded', function () {
  // Variables para guardar la información de la encuesta
  let respuestas = [];

  // Event listener para el botón "Ver Resultado"
  document.getElementById('btnVerResultado').addEventListener('click', function () {

    // Verifica si se ha elegido al menos una marca
    const marcasElegidas = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
      marcasElegidas.push(checkbox.value);
    });
    if (marcasElegidas.length === 0) {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor, elija al menos una marca antes de continuar.',
        icon: 'warning'
      });
      return;
    }

    // Verifica si todos los radios están seleccionados
    if (respuestas.length < 3 || respuestas.some(res => !res)) {
      Swal.fire({
        title: 'Atención',
        text: 'Por favor, responda todas las preguntas antes de continuar.',
        icon: 'warning'
      });
      return;
    }

    // Calcula la puntuación de la encuesta
    let puntuacion = 0;
    for (let i = 0; i < respuestas.length; i++) {
      puntuacion += parseInt(respuestas[i]);
    }

    // Calcula el porcentaje de satisfacción
    let puntos = (puntuacion * 100) / 15;
    puntos = Math.round(puntos) + " %";

    // Determina el grado de satisfacción
    if (puntuacion >= 0 && puntuacion <= 3) {
        puntuacion = "<h1 class='text-danger'>Muy insatisfecho</h1>";
    } else if (puntuacion > 3 && puntuacion <= 6) {
        puntuacion = "<h1 class='text-danger'>Insatisfecho</h1>";
    } else if (puntuacion > 6 && puntuacion <= 9) {
        puntuacion = "<h1 class='text-warning'>Regular</h1>";
    } else if (puntuacion > 9 && puntuacion <= 12) {
        puntuacion = "<h1 class='text-success'>Satisfecho</h1>";
    } else if (puntuacion > 12 ) {
        puntuacion = "<h1 class='text-success'>Muy Satisfecho</h1>";
    }

    // Muestra el resultado en una ventana de Swal
    Swal.fire({
      title: `Resultado de la encuesta <br> Para las marcas: <strong> ${marcasElegidas.join(' y ')} </strong>`,
      html: `<h4>Nota Obtenida: ${puntos}</h4><br>` + `<h4>Grado de satisfacción:</h4><br><h3><strong> ${puntuacion}</strong></h3>`,
      icon: 'info'
    });

    // Reinicia todas las respuestas
    respuestas = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    }
    );
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;});
      


  });

  // Event listener para el botón "Limpiar"
  document.getElementById('btnLimpiar').addEventListener('click', function () {

    // Reinicia todas las respuestas
    respuestas = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
  });

  // Event listener para los checkboxes de marcas
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      // Guarda la marca elegida
      // Esto podría ser útil en caso de que necesites saber qué marca fue seleccionada en algún momento, pero no es necesario para la funcionalidad actual.
    });
  });


  // Event listener para los radio buttons de las preguntas
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function () {
      // almacena el valor de un elemento HTML en una posición específica de un array llamado respuestas. La posición en la que se almacena este valor se determina según el último dígito del nombre del elemento HTML.
      respuestas[parseInt(this.name.slice(-1)) - 1] = this.value;
    });
  });
});
