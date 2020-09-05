
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CONSTANTES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Las constantes son bloques de memoria que el lenguaje no le permite cambiar,
// Al contrario que las varibles que si se pueden cambiar.

// Ejemplo 1

const tipoSexo = "Femenino";

// En esta linea de codigo se intenta cambiar el valor de la constante
//tipoSexo = "Masculino";

console.log(tipoSexo);

// Al ejecutar el programa nos generara un error diciendo 
// que no se puede cambiar el valor de una constante
// Esto funciona en tipo de datos primitivos



// Pero no funciona en tipos de datos compuestos
const colores = ['Blanco', 'Negro']

colores.push('Gris')

console.log(colores)
