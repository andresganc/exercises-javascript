
$(document).on("ready", notamedia());

function notamedia() {

    // Paso 2
    var nombre =  document.getElementById("InputNombre").value;

    var edad = document.getElementById("InputEdad").value;

    var grado = document.getElementById("InputGrado").value;
  
    var sexo = document.getElementById("selectSexo").value;

    var nota1 = document.getElementById("InputNota1").value;

    var nota2 = document.getElementById("InputNota2").value;

    var nota3 = document.getElementById("InputNota3").value;


    // Paso 3
    var resultado = ( ( parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) ) / 3 );


    // Paso 4
    var mayoromenor;
    if (edad > 18) {
        mayoromenor = (" mayor de edad ");
    } else {
        mayoromenor = ( " menor de edad " ); 
    }


    // Paso 5.
    window.alert(" Nombre : " + nombre + " Edad : " + edad + " es : " + mayoromenor + " Grado : " + grado + " Sexo : " + sexo + " Nota 1 : " + nota1 + " Nota 2 : " + nota2 + " Nota 3 : " + nota3 + " Nota final : " + resultado);

    
    // Paso 6.
    if (resultado > 2.9) {
        window.alert ("!!!! GANO LA MATERIA :) !!!!")
    } else {
        window.alert ("!!!! PERDIO LA MATERIA :( !!!!");
    }



}