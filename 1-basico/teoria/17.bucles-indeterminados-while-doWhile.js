
// BUCLE INDETERMINADO WHILE

// BUCLE: Por repite
// INDETERMINADO: Indeterminado por que no se sabe cuantas veces va a repetir

// WHILE: Mientras
// DO WHILE: Hacer mientras

/*
SINTAXIS

while (condicion) {
    haga esto
}

*/

var ProductoNC = ["Camara fija interna", "camara fija externa", "DVR - XVR", "Video Balum"];
var meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio",              
    "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"];

var contador = 0;

// Ejemplo 1

while (contador < 4){

    console.log (ProductoNC[contador]);
    //contador = contador + 1;      // Es lo mismo que poner contador ++
    contador ++
}

contador.

contador = 0;
// Ejemplo 2
while ( contador < meses.length ) {

    console.log (meses[contador]);
    contador ++

}



// BUCLE INDETERMINADO WHILE
// Se usa cuando quiero que una accion se realice en su primera vez asi la condicion no se cumpla.

/*
SINTAXIS

do {
    esto
}while (true);

*/