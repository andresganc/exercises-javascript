
/* 
Object entries
    - Se agrego para manejar y administrar los datos recibidos desde una API
    - Object entries deveule los valores de una matriz.
*/


// Ejemplo 1
// Simulando Datos de API
const data = {
    design: 'Alejandra',
    frontend: 'Jenny',
    backend: 'Andres'
}

//Tranformar este objeto en una matriz.
const entries = Object.entries(data);
console.log(entries)
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);




// Ejemplo 2
//Object entries deveule los valores de una matriz.

const data ={
    front:'Alej',
    back: 'Rel'
};

//Tranformar este objeto en una matriz. 
const entries =Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);


//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 


const data= {
    front:'Alej',
    back: 'Rel'
}

const values = Object.values(data);
console.log(values);

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'


//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}