
/*

IDENTIFICADORES

    - Los identificadores deben de comenzar con:

        Letra
        Un signo dolar $
        Guion bajo

    - No deben iniciar con:

        Numeros
        Caracteres especiales

*/


// IDENFICADORES PERMITIDOS
// Los identificadores deben de comenzar con:

var variableconletra = 1
var $mivariable
var _mivariableconguionbajo

$mivariable = 2
_mivariableconguionbajo = 3

console.log(variableconletra)
console.log($mivariable)
console.log(_mivariableconguionbajo)


// IDENFICADORES NO PERMITIDOS
// Los idenficadores no deben de comenzar con:

// var 5mivarible
// var %mivarible


// CONVENCIONES & BUENAS PRACTICAS

// ARCHIVOS: Tecnica Snake Case ( En minuscula y guion bajo ).
// mi_archivo_javascript.js

// CONSTANTES: Tecnica Upper Case ( Todo en mayuscula )
const MICONSTANTE = "Marco-Daniela"

// CLASES: Tecnica UpperCamelCase ( Cambios de palabra en mayuscula ) 
class MiClase {
    constructor (nombre, genero) {
        this.nombre = "Andres"
        this.genero = "Masculino"
    }

    // Metodo: con tecnica LowerCamelCase
    miNombreEs() {
        return ("Mi nimbre es: ", nombre )
    }
} 

// OBJETOS: Tecnica LowerCamelCase ( Inicio minuscula inicio siguientes palabras mayuscula )
const miObjeto = {
    nombre: 'Andres',
    apellido:'Giraldo'
}

// PRIMITIVOS: Tecnica LowerCamelCase
let unaCadena = 'Hola mundo',
    unNumero = 19,
    unBoolean = true

// FUNCIONES: Tecnica LowerCamelCase
function holaMundo (nombre) {
    alert('Hola mundo', nombre)
}
holaMundo('Andres')

// INSTANCIAS: Tecnica de LowerCamelCase
const ajax = new XMLHttpRequest(),
    jon = new SerHumano('Andres, Hombre')


