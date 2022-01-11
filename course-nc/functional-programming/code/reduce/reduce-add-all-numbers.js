
/* 

ADD ALL NUMBERS OF ARRAY - SUMAR TODOS LOS NUMEROS DE UN ARRAY

Sumar los numeros de un arreglo - Esta es la forma correcta - No con el map

*/

const arrayNum = [ 1, 2, 3, 4, 5 ];

const total = arrayNum.reduce( (acc, el) => acc + el, 0 )
console.log(total)


