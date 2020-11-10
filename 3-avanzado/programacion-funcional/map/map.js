
// ================== MAP ================

/* 
- El metodo  de map nos permite transformar un arreglo.
- Genera una copia nueva con los funcion o atributos que queramos cambiar.


*/


// Multiplicar cada nuemro del arreglo x 2
const numeros = [ 0, 1, 2, 3, 4, 5 ];

// Usando map para mapear el arreglo y multiplicarlo x 2
const numerosMultiplicados = numeros.map( x => x * 2);
console.log(`Array original ${numeros}`);
console.log(`Array de numeros multiplicados ${numerosMultiplicados}`);

// Usando map para mapear 
const numerosParejas = numeros.map( x => [x,x] );
console.log(`Array ordenado por parejas - vista parentesis invertidos ${numerosParejas}`);
console.log('Array ordenado por parejas - vista normal ', numerosParejas)