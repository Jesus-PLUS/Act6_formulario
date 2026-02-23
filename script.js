// Variables
var formulario = document.querySelector("form"),
    nombre = document.getElementById("cardname"),
    correo = document.getElementById("email"),
    tarjeta = document.getElementById("cardnumber"),
    mes = document.getElementById("expmonth"),
    year = document.getElementById("expyear"),
    cvv = document.getElementById("cvv"),
    error = document.getElementById("error");


// Validar Nombre
function validarNombre(e){
    if(nombre.value.trim() === ""){
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML += "<li>Completa el nombre</li>";
        e.preventDefault();
    }
}


// Validar Correo
function validarCorreo(e){
    if(correo.value.trim() === "" || !correo.value.includes("@")){
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML += "<li>Correo inválido</li>";
        e.preventDefault();
    }
}


// Validar Tarjeta (solo números y longitud)
function validarTarjeta(e){

    var soloNumeros = /^[0-9]+$/;

    if(!soloNumeros.test(tarjeta.value.trim())){
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML += "<li>La tarjeta debe contener solo números</li>";
        e.preventDefault();
    }

    if(tarjeta.value.trim().length < 13 || tarjeta.value.trim().length > 19){
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML += "<li>Número de tarjeta inválido</li>";
        e.preventDefault();
    }
}


// Validar Mes
function validarMes(e){
    if(mes.value < 1 || mes.value > 12){
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML += "<li>Mes inválido (1-12)</li>";
        e.preventDefault();
    }
}


// Validar Año (no vencido)
function validarYear(e){

    var añoActual = new Date().getFullYear();

    if(year.value < añoActual){
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML += "<li>La tarjeta está vencida</li>";
        e.preventDefault();
    }
}


// Validar CVV
function validarCVV(e){
    if(cvv.value.trim().length !== 3){
        error.style.display = "block";
        error.style.color = "red";
        error.innerHTML += "<li>CVV inválido (3 dígitos)</li>";
        e.preventDefault();
    }
}


// Función que valida todo
function validarForm(e){

    error.innerHTML = "";
    error.style.display = "none";

    validarNombre(e);
    validarCorreo(e);
    validarTarjeta(e);
    validarMes(e);
    validarYear(e);
    validarCVV(e);

    // Si no hay errores → mensaje verde
    if(error.innerHTML === ""){
        error.style.display = "block";
        error.style.color = "green";
        error.innerHTML = "<li>Formulario enviado correctamente</li>";
        e.preventDefault(); // para que no se recargue la página
    }
}


// Evento
formulario.addEventListener("submit", validarForm);