

/* 
EXPRESIONES REGULARES

- Las expresiones regulares se utilizan mucho para validar emails, Cedulas, DNI,
Tarjetas de credito,

- Lo que hacen las expresiones regulares es validar si el valor agregado tiene 
las caracteres y forma adecuada solicitada.

- Son una secuencia de caracteres que forma un patron de busqueda,
principalmente utilizzda para la busqueda de patrones de cadenas de caracteres


* Documentacion externa

- Wikipedia
     https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular


- MDN - Mozilla Developers Networks
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions



LA BARRA INVERSA O CONTRABARRA "\"
La barra inversa se utiliza para escapar el siguiente carácter de la expresión de búsqueda de forma que este adquiera un significado especial o deje de tenerlo. O sea, la barra inversa no se utiliza nunca por sí sola, sino en combinación con otros caracteres. Al utilizarlo por ejemplo en combinación con el punto "\." este deja de tener su significado normal y se comporta como un carácter literal.

De la misma forma, cuando se coloca la barra inversa seguida de cualquiera de los caracteres especiales que discutiremos a continuación, estos dejan de tener su significado especial y se convierten en caracteres de búsqueda literal.

Como ya se mencionó con anterioridad, la barra inversa también puede darle significado especial a caracteres que no lo tienen. A continuación hay una lista de algunas de estas combinaciones:

\t — Representa un tabulador.
\r — Representa el "retorno de carro" o "regreso al inicio" o sea el lugar en que la línea vuelve a iniciar.
\n — Representa la "nueva línea" el carácter por medio del cual una línea da inicio. Es necesario recordar que en Windows es necesaria una combinación de \r\n para comenzar una nueva línea, mientras que en Unix solamente se usa \n y en Mac_OS clásico se usa solamente \r.
\a — Representa una "campana" o "beep" que se produce al imprimir este carácter.
\e — Representa la tecla "Esc" o "Escape"
\f — Representa un salto de página
\v — Representa un tabulador vertical
\x — Se utiliza para representar caracteres ASCII o ANSI si conoce su código. De esta forma, si se busca el símbolo de derechos de autor y la fuente en la que se busca utiliza el conjunto de caracteres latín-1 es posible encontrarlo utilizando \xA9".
\u — Se utiliza para representar caracteres Unicode si se conoce su código. "\u00A2" representa el símbolo de centavos. No todos los motores de Expresiones Regulares soportan Unicode. El .Net Framework lo hace, pero el EditPad Pro no, por ejemplo.
\d — Representa un dígito del 0 al 9.
\w — Representa cualquier carácter alfanumérico.
\s — Representa un espacio en blanco.
\D — Representa cualquier carácter que no sea un dígito del 0 al 9.
\W — Representa cualquier carácter no alfanumérico.
\S — Representa cualquier carácter que no sea un espacio en blanco.
\A — Representa el inicio de la cadena. No un carácter sino una posición.
\Z — Representa el final de la cadena. No un carácter sino una posición.
\b — Marca la posición de una palabra limitada por espacios en blanco, puntuación o el inicio/final de una cadena.
\B — Marca la posición entre dos caracteres alfanuméricos o dos no-alfanuméricos.


Banderas:
g: Global
i: Ignora Mayusculas y Minusculas

*/


let cadena = "Lorem ipsum dolor sit amet consectetur adipiscing elit 29-05-1979. Voloutatem lorem"


/* Metodo 1*/
let expRegM1FlagVacia = new RegExp('lorem', '')
let expRegM1FlagGlobal = new RegExp('lorem', 'g')
let expRegM1FlagIgnore = new RegExp('lorem', 'i')
let expRegM1FlagIgnoreGlobal = new RegExp('lorem', 'ig')
let expRegM1FlagNumeros = new RegExp('\d', 'ig')

console.log(` Metodo 1 - Buscando lorem - Flag vacia - test ${expRegM1FlagVacia.test(cadena)}`)
console.log(` Metodo 1 - Buscando lorem - Flag vacia - exec ${expRegM1FlagVacia.exec(cadena)}`)

console.log(` Metodo 1 - Buscando lorem - Flag g - test ${expRegM1FlagGlobal.test(cadena)}`)
console.log(` Metodo 1 - Buscando lorem - Flag g - exec ${expRegM1FlagGlobal.exec(cadena)}`)

console.log(` Metodo 1 - Buscando lorem - Flag i - test ${expRegM1FlagIgnore.test(cadena)}`)
console.log(` Metodo 1 - Buscando lorem - Flag i - exec ${expRegM1FlagIgnore.exec(cadena)}`)

console.log(` Metodo 1 - Buscando lorem - Flag ig - test ${expRegM1FlagIgnoreGlobal.test(cadena)}`)
console.log(` Metodo 1 - Buscando lorem - Flag ig - exec ${expRegM1FlagIgnoreGlobal.exec(cadena)}`)

console.log(` Metodo 1 - Buscando numeros - Flag i - test ${expRegM1FlagNumeros.test(cadena)}`)
console.log(` Metodo 1 - Buscando numeros - Flag i - exec ${expRegM1FlagNumeros.exec(cadena)}`)


/* Metodo 2 (Mas usado) */
let expRegM2FlagVacia = /lorem/;
let expRegM2FlagGlobal = /lorem/g;
let expRegM2FlagIgnore = /lorem/i;
let expRegM2FlagIgnoreGlobal = /lorem/ig;
let expRegM2FlagNumeros = /\d/

console.log(` Metodo 2 - Buscando lorem - Flag vacia - test ${expRegM2FlagVacia.test(cadena)}`)
console.log(` Metodo 2 - Buscando lorem - Flag vacia - exec ${expRegM2FlagVacia.exec(cadena)}`)

console.log(` Metodo 2 - Buscando lorem - Flag g - test ${expRegM2FlagGlobal.test(cadena)}`)
console.log(` Metodo 2 - Buscando lorem - Flag g - exec ${expRegM2FlagGlobal.exec(cadena)}`)

console.log(` Metodo 2 - Buscando lorem - Flag i - test ${expRegM2FlagIgnore.test(cadena)}`)
console.log(` Metodo 2 - Buscando lorem - Flag i - exec ${expRegM2FlagIgnore.exec(cadena)}`)

console.log(` Metodo 2 - Buscando lorem - Flag ig - test ${expRegM2FlagIgnoreGlobal.test(cadena)}`)
console.log(` Metodo 2 - Buscando lorem - Flag ig - exec ${expRegM2FlagIgnoreGlobal.exec(cadena)}`)

console.log(` Metodo 2 - Buscando numeros - Flag i - test ${expRegM2FlagNumeros.test(cadena)}`)
console.log(` Metodo 2 - Buscando numeros - Flag i - exec ${expRegM2FlagNumeros.exec(cadena)}`)