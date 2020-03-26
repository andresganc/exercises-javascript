

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
console.log (1 + 100 * 5);
// OUTPUT: 501


/* ========== AGRUPAMIENTOS ========== */
// () el operador agrupa otros valores y operaciones. El código ubicado entre paréntesis se evalúa primero ya que JavaScript resuelve cada operación que se mueve de izquierda a derecha.
// Agregar el operador de agrupación al ejemplo anterior hace que 1 + 100 se evalúe primero.

console.log ((1 + 100 + (5 + 5)) * 5);
((1 + 100 + (10))* 5
((111) * 5)

// OUTPUT: 505

// Aplicando varias operaciones
console.log((100+4+8)*(5)-4);


/* ========== Concatenación ========== */
// El operador + también puede concatenar cadenas, que es otra forma de decir que puede agregarlas juntas.

console.log ("MA" + "MA");


/* ========== Asignación ========== */
//El operador = asigna valores. Se utiliza para establecer el valor de las variables .

var variable1 = "Hola";