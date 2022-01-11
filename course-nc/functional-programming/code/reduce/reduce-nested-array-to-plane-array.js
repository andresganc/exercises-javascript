
/* 

NESTED ARRAY TO PLANE ARRAY 

convert nested array 

*/

const anidado = [1, [2, 3], 4, [5]];

const plano = anidado.reduce((acc, el) => acc.concat(el), [])   // concat / concatenar

console.log('Arreglo original: ', anidado)
console.log('Arreglo anidado convertido a plano: ', plano);