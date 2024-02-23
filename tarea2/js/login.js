/*conexion con HTML usando el id btn-login y cargando la funcion llamada login*/
document.getElementById("boton").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Parece que algo está mal <br>Verificar los datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#007e80",
        html: ' <iframe src="https://lottie.host/embed/96ebef8d-ebb5-4524-bc6b-56c49794c9b3/UZV8cBdPjO.json"></iframe><br><p>' + ptext + " </p>",
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("usuario").value;
    let pass_input = document.getElementById("password").value;

    //declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";

    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["usuario", "password"];
    let error_count = 0;
    let text = "";
    
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        //si estan vacios los campos de entrada 
        if (input[i] == "") {
            //aparece el texto que llevar el parametro de la funcion validación_alert
            text = "Los campos requeridos NO pueden estar vacíos.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        } 
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe src="https://lottie.host/embed/89a73ed8-872f-43f4-a326-99b1331fda5d/ln7MeY0rQo.json"></iframe> <br><br><p>Conectando.... </p>',

            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}