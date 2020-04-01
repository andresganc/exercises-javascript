// Esta linea de codigo asegura que la pagina esta cargada
$(document).on("ready", dividir());

function dividir() {

    // Paso 1 & 2
    var numero1 = document.getElementById("InputNumero1").value;

    var numero2 = document.getElementById("InputNumero2").value;

    // Paso 3
    var resultado = ( parseFloat(numero1) / parseFloat(numero2) );

    // Paso 5.
    document.getElementById("LabelTotal").innerHTML = resultado

    window.alert("El resultado de la division es : " + resultado);

}