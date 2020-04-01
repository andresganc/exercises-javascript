
$(document).on("ready", mayormenoredad());

function mayormenoredad() {

    // Paso 2 (Almacenar en variables)
    var nombre = document.getElementById("InputNombre").value;

    var apellido = document.getElementById("InputApellido").value;

    var edad = document.getElementById("InputEdad").value;

    
    // Paso 3 & 4.  ( Evaluar con un condicional if si es mayor de edad - Enviarle el mensaje si es mayor o menor de edad )
    if ( edad > 18 ) {

        window.alert (" Su nombre es : " + nombre + " " + apellido + " y ud es mayor de edad ");

    } else {

        window.alert (" Su nombre es : " + nombre + " " + apellido + " y ud es menor de edad ");

    }

}