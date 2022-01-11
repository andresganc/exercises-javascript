
/* 
FILTER AGE
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const mascotas = [
    { animal: 'Perro', nombre: 'Puchini', edad: 6, raza: 'Gran danes' },
    { animal: 'Cerdo', nombre: 'Chanchito feliz', edad: 3, raza: 'Mini pig' },
    { animal: 'Perro', nombre: 'Pulga', edad: 4, raza: 'Chiguaga' },
    { animal: 'Loro', nombre: 'Pelusa', edad: 2, raza: 'Silvestre' },
];

//console.log(`Todos los arreglos ${numeros} ${mascotas}`);
console.log('Todos los arreglos :', numeros, mascotas);


// Filtrar numeros que sean menores que 5
const numerosFiltrados = numeros.filter( x => x < 5 );

console.log(`Numeros si filtrar: ${numeros}`);
console.log(`Numeros filtrados: ${numerosFiltrados}`);