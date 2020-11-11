
// La programacion funcional evita procesos imperativos

// Objetivo del ejercicio: Contar cuantos numeros del array numeros son mayores a 10

var numeros = [ 8, 856, 4, 6, 98 ];



// Solucion imperativa
var contador = 0;

for (var i=0; i < numeros.length; i++ ) {
    var numero = numeros[i];
    console.log(numero)
    if ( numero > 10 ){
        contador ++;
    }
}
console.log( "Solucion imperativa / Los numero mayores a 10 fueron : ", contador );




// Solucion Declarativa
var resultado = numeros.map().filter(n => n => 10 ).count();
console.log( "Solucion declarativa / Los numero mayores a 10 fueron : ", resultado )