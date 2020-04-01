
$(document).on("ready", horasempleados());

function horasempleados() {

    // Paso 2
    var horasmañana =  document.getElementById("InputHorasMañana").value;

    var horastarde = document.getElementById("InputHorasTarde").value;

    var horasnoche = document.getElementById("InputHorasNoche").value;

    var valorhoraempleado = document.getElementById("InputValorHora").value;


    // Paso 3
    var resultado = ( ( parseFloat(horasmañana) + parseFloat(horastarde) + parseFloat(horasnoche) ) * parseFloat(valorhoraempleado) );


    // Paso 4
    window.alert (" Horas mañana : " + horasmañana + " Horas tarde : " + horastarde + " Horas noche : " + horasnoche + ". El valor en dinero es : " + resultado );


}