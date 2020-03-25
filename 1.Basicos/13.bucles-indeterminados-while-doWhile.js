
// BUCLE INDETERMINADO WHILE

// BUCLE: Por repite
// INDETERMINADO: Indeterminado por que no se sabe cuantas veces va a repetir

// WHILE: Mientras
// DO WHILE: Hacer mientras

/*
SINTAXIS

while () {

}

*/

var ProductoNC = ["Camara fija interna", "camara fija externa", "DVR - XVR", "Video Balum"];
var meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"];

var contador = 0;

while ( contador < meses.length ) {

    console.log (meses[contador]);
    contador ++

}