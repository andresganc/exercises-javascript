
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! VARIABLES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Las variables son valores con nombre que pueden almacenar cualquier tipo de valor de JavaScript.
// Se llaman variables con que su valor puede variar
// Aquí se explica cómo declarar una variable:
// Lo declaro con el comando var

var variable1 = "Sebastian es muy juicioso";
var variable2 = "Correcto";
var variable3 = 3;
var variable4 = "";
var variable5 = "Sebastian";
var variable6 = "Gomez";

variable3 = 5;

variable4 = "Giraldo"

console.log (variable1, variable2, variable3, variable4);

console.log ("El hijo de Jenny se llama", variable5, variable4, variable6, "Y tiene", variable3, "años.");



// VAR TIENE AMBITO GLOBAL y esto se concidera una mala practica
// Es decir se puede usar en cualquier parte del archivo de codigo


if (true){
    var nombre = "Marco"
}

console.log(nombre);



// LET TIENE AMBITO DE BLOQUE ( Introducido en ES6 - EcmaScript2015 )
// Let se usa para almacenar variables y fue introducido en ES6 por las malas practicas que tiene var
// Var sale de la zona y se declara de manera global let no solo se puede usar en la zona que se pone

if (true) {
    let apellido = "Giraldo"
}

// Arroja error porque no encuentra la varible apellido
//console.log (apellido)
