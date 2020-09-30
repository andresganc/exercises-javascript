
// DESTRUCTURACION 
// Fue agregago a javascript en ES6 - EcmaScript 2015

// Capturar posicion de un array
// Forma normal ( Sin destructuracion) 
let numerosSin = [6, 20, 89]

let unoSin = numerosSin[0],
    dosSin = numerosSin[1],
    tresSin = numerosSin[2];

console.log(unoSin, dosSin, tresSin)


// Con destructuracion

// Ejemplo 1 - En Array
let numerosCon = [67, 298, 4]
const [unoCon, dosCon, tresCon] = numerosCon
console.log(unoCon, dosCon, tresCon)


// Ejemplo 2 - En objeto 
// En un objeto se debe usar 
let persona = {
    nombre: 'Andres',
    apellido: 'Giraldo',
    edad: 42
}
let { nombre, apellido, edad } = persona
console.log(nombre, apellido, edad)