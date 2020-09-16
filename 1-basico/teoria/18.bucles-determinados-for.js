
// BUCLE DETERMINADO FOR (Para)

// Un bucle es una secuencia o repeticion
// Determinado por que se sabe cuantas serian sus secuencias


/*
SINTAXIS

for (inicio; condicion; incremento/decremento) {
    codigo a repetir tantas veces sea
}

*/


// Ejemplo 1

var inicioBucle = 0;
var ProductoNC = ["Camara fija interna", "camara fija externa", "DVR - XVR", "Video Balum"];


// Ejemplo 1
console.log ("Ejemplo 1");

for ( var i=0; i<10; i++ ) {

    console.log("Hola");

}

// Ejemplo 2
console.log("Ejemplo 2");

for ( inicioBucle; inicioBucle<10; inicioBucle++ ){

    console.log(inicioBucle);

}

// Ejemplo 3
console.log("Ejemplo 3");

for (var i=0; i<10; i+=2) {

    console.log(i);

}


// Ejemplo 4
console.log("Ejemplo 4");

for (var i=10; i>0; i--) {

    console.log(i);

}


// Ejemplo 5
console.log("Ejemplo 5");

for ( var i=0; i<=3; i++ ) {

    console.log(ProductoNC[i]);

}
