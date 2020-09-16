// ARRAY
// Los array es una varible en la que se pueden almacenar varios datos o valores

/*
SINTAXIS

var variable = ["datoTexto", datoNumerico, DatoBoleano];

*/

var numeros = new Array(1, 2, 3);
console.log(numeros)

var producto_nc = ["Camara fija interna", "camara fija externa", "DVR - XVR", "Video Balum"];

var actors = ["Felicia", "Nathan", "Neil"];

console.log (producto_nc);
console.log (producto_nc.length);

// Imprimir en pantalla el registro 2
console.log (producto_nc[2]);




// BUENAS PRACTICAS
// Declarar los arreglos con const o let

// Arreglos con arreglos dentro
const arreglo_madre = ['Andres', 42, true, ['a', 2, 'b']]

console.log(arreglo_madre)

// Mostrado arreglos dentro de un arreglo
console.log(arreglo_madre[3][0])


// Declaracion de arreglos desde ES6
const z = Array.of('A', 1, true, 7,8)

console.log( z )


// Push & Pop
// Push agrega elementos al final y Pop quita elementos del final

const colores = ['Rojo', 'Amarillo']
colores.push("*Verde: Color agregado con push");
colores.push('*Azul')
colores.push('*Negro')

colores.pop()

console.log(colores)


// Llenar arreglo con fill varias veces
const w = Array(50).fill('Marco & Daniela')
console.log(w)



// forEach
//
colores.forEach(function(el, index){
    console.log(`<li id="${index}"> ${el} </li>`)
})
