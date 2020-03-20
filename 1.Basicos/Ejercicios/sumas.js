// =========================================== SUMAS =======================================

// Variables
var numero1;
var numero2;
var numero3;
var resultado;

numero1 = 5;
numero2 = 80;

console.log(numero1 + numero2);




// Ejercicio 1
// Pedir 3 numeros a un usuario, sumarlos y mostrar el resultado 


console.log("SUMAR 3 NUMEROS");

console.log("Inserte el primer numero:");
// Solicitud de dato por consola
numero1 = process.openStdin();
numero1.addListener("data", function(d){
    console.log("El numero que insertaste fue :" + d.toString().trim());
});



/*
console.log("Inserte el segundo numero :");
numero2 = process.openStdin();
numero2.addListener("data", function(d){
    console.log("El numero que insertaste fue :" + d.toString().trim());
});


console.log("Inserte el tercer numero :");
numero3 = process.openStdin();
numero3.addListener("data", function(d){
    console.log("El numero que insertaste fue :" + d.toString().trim());
});

resultado = (numero1 + numero2 + numero3);

//console.log("El resultado es: ", resultado);




// Impresion de dato por consola en NodeJS
resultado.addListener("data", function(d){
    console.log("La suma de los 3 numeros es :" + d.toString().trim());
});



*/


