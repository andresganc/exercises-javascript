
$(document).on("ready", cierrecaja());

function cierrecaja() {

    // Paso 3.
    var venta1 =  document.getElementById("InputVenta1").value;

    var venta2 = document.getElementById("InputVenta2").value;

    var venta3 = document.getElementById("InputVenta3").value;

    var gasto1 = document.getElementById("InputGasto1").value;

    var gasto2 = document.getElementById("InputGasto2").value;


    // Paso 4.
    var totalventas = ( parseInt(venta1) + parseInt(venta2) + parseInt(venta3) );

    var totalgastos = ( parseInt(gasto1) + parseInt(gasto2) );


    // Paso 5.
    var resultadoCierreCaja = ( totalventas - totalgastos );

    
    // Paso 6.
    window.alert (" Las ventas fueron : " + totalventas + " Los gastos fueron : " + totalgastos + " El cierre de caja es : " + resultadoCierreCaja)


}