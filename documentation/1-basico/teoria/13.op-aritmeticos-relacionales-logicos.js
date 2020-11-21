

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! OPERADORES ARITMETICOS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Los operadores aritmeticos son los símbolos entre los valores que permiten diferentes operaciones como suma, resta, multiplicación y más.
// JavaScript tiene docenas de operadores, así que concentrémonos en los que probablemente verá con más frecuencia.


/* ========== Aritmética ========== */

// SUMA: El operador + suma dos números.
console.log (1 + 2);
// OUTPUT: 3


// RESTA: El operador - resta un número de otro.
console.log (50 - 15);
// OUTPUT: 35


// MULTIPLICACION: El operador * multiplica dos números. Observe que es un asterisco y no el símbolo × comúnmente utilizado en matemáticas.
console.log (3 * 12);
// OUTPUT: 36


// DIVISION: El operador / divide un número por otro. Observe que es una barra diagonal y no el símbolo ÷ comúnmente usado en matemáticas.
console.log (12/4); 
// OUTPUT: 3


// ORDEN DE OPERACIONES
// Las expresiones de JavaScript siguen un orden de operaciones , 
// por lo que aunque + se escribe primero en el siguiente ejemplo, 
// la multiplicación ocurre primero entre los dos últimos números y *.


// ORDEN PEMDAS 

// 1. P  / Parentesis ( Operaciones encerradas en parentesis )
// 2. E  / Exponentes ( Potencias & Raices )
// 3. MD / Multiplicar & Dividir
// 4. AS / Adicion & Sustracion ( Suma & Resta )


// Orden: Izquierda a Derecha



console.log (1 + 100 * 5);
// OUTPUT: 501


/* ========== AGRUPAMIENTOS ========== */
// () el operador agrupa otros valores y operaciones. El código ubicado entre paréntesis se evalúa primero ya que JavaScript resuelve cada operación que se mueve de izquierda a derecha.
// Agregar el operador de agrupación al ejemplo anterior hace que 1 + 100 se evalúe primero.

console.log ((1 + 100 + (5 + 5)) * 5);
// ((1 + 100 + (10))* 5
// ((111) * 5)

// OUTPUT: 505

// Aplicando varias operaciones
console.log((100+4+8)*(5)-4);


/* ========== Concatenación ========== */
// El operador + también puede concatenar cadenas, que es otra forma de decir que puede agregarlas juntas.

console.log ("MA" + "MA");


/* ========== Asignación ========== */
//El operador = asigna valores. Se utiliza para establecer el valor de las variables .

var variable1 = "Hola";


// Modulo ( Residuo de una division )
let modulo = 5 % 2
console.log(modulo)




// ================ OPERADORES RELACIONALES ======================

// Mayor que            /      > 
// Menor que            /      <  
// Mayor igual          /      >=
// Menor igual          /      <=
// Igual igual          /      ==
// Triple igual         /      ===
// Diferente de         /      !=
// Super diferente de   /      !==

// Asignacion / =
let a = 5;

// Comparacion de valores / ==  ( Mala practica porque podemos caer en errores)
console.log("7" == 7)   // Arroja verdadero asi sean de diferente tipo

// Comparacion de tipo de dato y valor / ===    ( Buena practica porque evalua si son del mismo valor y tipo )
console.log("7" === 7)  // Arroja falso por que no son el mismo tipo de dato (String y Number)

// Malas practicas - comparacion 2 y 3  los arroja como verdadero y no deberia de ser asi. 
console.log(7 == 7)
console.log("7" == 7)
console.log(0 == false)

// Buenas practicas - Solo arroja verdadero el 1 
console.log(7 == 7)
console.log("7" == 7)
console.log(0 == false)


// Incremento
let i = 1
let x = 1
let y = 1
// Incremento forma 1 ( Antigua ) 
i = i + 2

// Incremento forma 2 ( Moderna )
x += 2

// Otros
y -= 2
y *= 2
y /= 2


// Operador unario 
let w = 5
i++
i--

// Hay que tener cuidado con ++i o --i Porque puede sumar o restar antes y dar valores diferente en ciertas ocacciones
++i     // No recomendado
--i     // No recomendado

console.log(w)



// OPERADORES LOGICOS
// Negacion /   !   /   ( Not )
// O        /   ||  /   (Or)
// Y        /   &&  /   (And)

console.log(!true)
console.log(!false)
console.log( (9 === 9) || ('9' === 9) )
console.log( (9 === 9) && ('9' === 9) )