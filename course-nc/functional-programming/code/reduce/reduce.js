
// ============ ARRAY REDUCE =============
/*
- Reduce es un metodo que tienen los arreglos en JavaScript y permiten ejecutar 
    funciones reducer

- Se llaman igual que en Redux (reducer). Pero no son lo mismo.

- La funcion de reducer recibe 2 argumentos
    1. El primer argumento es un valor que esta siendo acumulado.
    2. El segundo es el elemento que se esta iterando del arreglo.

- Al final la funcion devuelve el elemento que se esta acumulando

Ejemplo codigo:

    // Funcion reducer
    const reducer = (acumulador, valorActual) => nuevoAcumulador

    // Funcion reducer | acc = acumulador | el = elemento | 0 = valor inicial
    const reducido = [].reduce((acc, el) => acc + el, 0)
*/


// EJERCICIO 1
// Sumar los numeros de un arreglo - Esta es la forma correcta - No con el map
const numeros = [1, 2, 3, 4, 5]

const resultado = numeros.reduce((acc, el) => acc + el, 0)

console.log(resultado)



// EJERCICIO 2
// 1. Indexar arreglo mascotas por nombre
// 2. Hacer busqueda de un elemento por el nombre del animal

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



// EJERCICIO 3
// Pasar arreglo o api(end point) anidada a arreglo plano

const anidado = [1, [2, 3], 4, [5]];

const plano = anidado.reduce((acc, el) => acc.concat(el), [])   // concat / concatenar

console.log('Arreglo original: ', anidado)
console.log('Arreglo anidado convertido a plano: ', plano);


