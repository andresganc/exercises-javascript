
/*

INDEXED A OBJECT 

// 1. Indexar arreglo mascotas por nombre
// 2. Hacer busqueda de un elemento por el nombre del animal

*/


// Arreglo mascotas
const mascotas = [
    { animal: 'Perro', nombre: 'Puchini', edad: 6, raza: 'Gran danes' },
    { animal: 'Cerdo', nombre: 'Chanchito feliz', edad: 3, raza: 'Mini pig' },
    { animal: 'Perro', nombre: 'Pulga', edad: 8, raza: 'Chiguaga' },
    { animal: 'Loro', nombre: 'Pelusa', edad: 2, raza: 'Silvestre' },
];

// Paso 1: Indexar arreglo mascotas por nombre
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {})

console.log('Todos el arreglo de animales indexado por nombre:', indexed);
console.log('De esta forma puedo buscar por el nombre que quiera')

// Paso 2: Hacer busqueda de un elemento por el nombre del animal
console.log('Perro', indexed['Pulga']);