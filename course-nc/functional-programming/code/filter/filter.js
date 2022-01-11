

// ================ FILTER ====================

/* 
Filtrar elementos recogidos detro de un nuevo arreglo

Filter es inmutable: No modifica los elementos originales

Lo bueno de filter es que recibe una funcion y se podria usar con cualquier 
funcion pura que se le envie (Generando codigo reutilizable)

USOS
Uso 1: Recoger datos de una API y filtrar en un nuevo array solo los que necesito.
Uso 2: Recoger datos de una base de datos y filtrar en un nuevo array solo los que necesito.
Uso 3: Recoger elementos de un array y filtrar en un nuevo array solo los que necesito.

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


// Filtrar mascotas que sean solo perros
const mascotasFiltradosAnimales = mascotas.filter( x => x.animal === 'Perro' );

console.log('Todas las mascotas :', mascotas);
console.log('Mascotas que son perros :', mascotasFiltradosAnimales);

