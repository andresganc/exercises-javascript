
// STRING


/* Comillas Simples y Dobles */
// String con comillas simples y comillas dobles
console.log('This is a string. 👏');
console.log('"This is the 2nd string. 💁"');


/* Entre comillas */
// Digamos que estás tratando de usar comillas dentro de una cadena. 
// Deberá utilizar comillas opuestas dentro y fuera. 
// Eso significa que las cadenas que contienen comillas simples deben usar comillas dobles y 
// las cadenas que contienen comillas dobles deben usar comillas simples.
console.log("Comilla's simples entre comilla's dobles.");
console.log('Comilla"s dobles entre comilla"s simples');


/* Properties and methods */
// Las cadenas tienen sus propias variables y funciones integradas, 
// también conocidas como propiedades y métodos . Estos son algunos de los más comunes.
// longitud
// La propiedad de longitud de una cadena realiza un seguimiento de cuántos caracteres tiene.
console.log ("longitud_de_texto_con_lenght".length);


/* toLowerCase */
// El método toLowerCase de una cadena devuelve una copia de la cadena con sus letras convertidas a minúsculas. 
// Los números, símbolos y otros caracteres no se ven afectados.
console.log ("MAYUSCULAS CONVERTIDAS A MINUSCULAS CON toLowerCase".toLowerCase());


/* toUpperCase */
// El método toUpperCase de una cadena devuelve una copia de la cadena con sus letras convertidas a mayúsculas. 
// Los números, símbolos y otros caracteres no se ven afectados.
console.log ("minusculas convertidas a mayusculas con toUpperCase".toUpperCase());


/* trim */
// El método de recorte de una cadena devuelve una copia de la cadena con los espacios en blanco iniciales y finales eliminados. 
console.log ("   espacios iniciales y finales recortados con trim   ".trim());


// Creando un objeto de tipo string
let nombre = 'Andres'
let saludo = new String('Bienvenido');

console.log(saludo, nombre)
console.log('El nombre ', nombre, ' Tiene ',  nombre.length, ' Letras ' )


// STRING PROPIEDAD LENGTH

var x = 'Mozilla';
var empty = '';

console.log('Mozilla is ' + x.length + ' code units long');
/* "Mozilla is 7 code units long" */

console.log('The empty string has a length of ' + empty.length);
/* "The empty string has a length of 0" */


// METODOS DE LAS CADENAS DE TEXTO

// TOUPPERCASE - TOLOWERCASE
// Convertir a mayuscula y a minuscula un texto
let name = "Andres"
let lastname = "Giraldo"

console.log('toUpperCase: Mayusculas', name.toUpperCase() )
console.log('toLowerCase: Minuscula ', lastname.toLowerCase() )


// INCLUDE
// Saber si un texto esta incluido

let lorem = "  Hola mi nombre es Andres Giraldo y soy Dev Full Stack  "

console.log('El string con tiene la palabra Andres?', lorem.includes("Andres"))


// TRIM
// Quita los espacios en blanco al inicio y al final
console.log('Con espacios :', lorem)
console.log('Sin espacios :', lorem.trim())


// SPLIT
// Convierte una cadena de texto en un Array ( Sensible a espacios o comas )
console.log('String lorem convertida a Array:', lorem.split(" "))