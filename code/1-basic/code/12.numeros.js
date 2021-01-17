/* Numeros enteros
 Los números son valores que se pueden usar en operaciones matemáticas. 
 No necesita ninguna sintaxis especial para los números, 
 simplemente escríbalos directamente en JavaScript.
*/

console.log (12345);

/* Decimales y fracciones 
JavaScript no distingue entre números enteros y decimales, 
por lo que puede usarlos juntos sin tener que convertirlos de uno a otro.
*/

console.log (10 + 3.1);
//OUTPUT: 13.14159


/* Las fracciones no existen en JavaScript,  */
// pero puede reescribirlas como problemas de división usando el operador de división /. 
// Tenga en cuenta que el número resultante siempre se convierte a decimales, al igual que con una calculadora.

console.log (1 / 3);
//OUTPUT: 0.3333333333333333

// Las fracciones impropias usan el operador de división de la misma manera.
console.log (11 / 10);
//OUTPUT: 1.1

// Para usar números mixtos, debe sumar el número entero y la fracción.
console.log (1 + (4 / 3));
//OUTPUT: 2.333333333333333

/* Números negativos */
// Puede hacer un número negativo colocando el operador - al frente.
console.log (-3);

// También puede obtener un número negativo restando un número de un número más pequeño.
console.log (5 - 7);
//OUTPUT: -2



// FORMA DE DECLARAR NUMEROS

// Declaracion normal
let num1 = 2
// Declaracion de numero con su constructor
let num2 = new Number(5)

console.log(num1, num2)


// ========== PROPIEDADES ============

// MAX_VALUE

// MIN_VALUE



// ============= METODOS ==============

// toFixed
// El método toFixed() formatea un número usando notación de punto fijo. 

let num_entero_string = '5'
let num_entero = 8
let num_decimal = 7.19


console.log( `La variable es de tipo: ${typeof num_entero_string }` )
// Output: La variable es de tipo: string
console.log( `La variable es de tipo: ${typeof num_decimal }` )
// Output: La variable es de tipo: number

console.log(num_decimal.toFixed(2))
//Outout: 7.19
console.log(num_decimal.toFixed(5))
// Output: 7.19000
console.log(num_decimal.toFixed(1))
// Output: 7.2


//  pasrseInt
// The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
// The Number.parseInt() El método Number.parseInt () analiza un argumento de cadena y devuelve un entero de la raíz o base especificada.

console.log( parseInt(num_entero_string) )
// Output: 7


// parseFloat
// El método Number.parseFloat() parsea un argumento cadena y regresa un número de punto flotante. 
// Este método se comporta de igual forma a la función global parseFloat() y es parte de ECMAScript 2015 
// (su propósito es la modularización de los globales).

console.log( parseFloat(num_entero_string) )
// Output: 7.19
