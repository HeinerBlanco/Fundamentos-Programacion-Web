document.getElementById("btn-login").addEventListener("click", login);

function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la informacion ingresada.",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: ' <iframe src="https://lottie.host/embed/0ef4f6c0-526b-45df-9885-9c868542d8fa/Wnl0mOUntv.json"></iframe><br><p>' + ptext + " </p>",
    });
}


function login() {

    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";

    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        } 
    }

    
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 5000,
                html: '<iframe src="https://lottie.host/embed/89a73ed8-872f-43f4-a326-99b1331fda5d/ln7MeY0rQo.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "https://www.ucenfotec.ac.cr", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
        }
    }
}