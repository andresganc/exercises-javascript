
/* 
Object values
    - Object values deveulve la valores de un objeto a una matriz.
    
*/

// Objeto
const data = {
    designUI: 'Aleja',
    frontend: 'Jenny',
    backend: 'Andres',

}

// Paso de los objetos a la matriz
const values = Object.values(data);
console.log(values);

// Podemos ver tambien la cantidad de elementos de la matriz
console.log(values.length)


