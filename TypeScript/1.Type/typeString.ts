
// TYPE STRING 

let nombre: String = "Andres";
let apellido: String;

const cedula: Number = 94474361;
var sexo: String = "Masculino";

var estatura: String = "1.80"

apellido = "Giraldo";

console.log(`Nombre ${ nombre }` );

console.log(`Nombre: ${ nombre } Apellido: ${ apellido } Cedula: ${ cedula } Sexo: ${ sexo }`);



let miTexto = "Esta variable ya es un String";
// miTexto = 22;        // Ya no se puede convertir esta variable en Number por antes la declaramos como String al escribir texto.
miTexto = 22 + "";      // Esto ya es valido por que lo converti en un String.

console.log(`Nombre ${ nombre }` );
