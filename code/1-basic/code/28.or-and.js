
/*
OPERADOR CORTO CIRCUITO - OR & AND

- Corto-circuito OR - || : ( Validacion true cuando cualquiera de los valores es valido ), 
Cuamdo el valor de la izquierda en la expresion siempre pueda validar a true, 
Es el valor que se cargar por defecto

- Corto-circuito AND - & : ( Validadcion true cuando todos los valores son validos ), Cuando el valor de izquierda en la expresion siempre pueda validar a false, 
Es el valor que se cargara por defecto
*/

// Variables
let people1 = 7
let people2 = 21
let people3 = 5


// Ejemplo OR
if ( people1>=18 || people2>=18 || people3>=18) {
    console.log('There is at least one person over 18 years old')
} else {
    console.log('No person over 18 years old')
}


// Ejemplo AND
if ( people1>=18 && people2>=18 && people3>=18) {
    console.log('everybody are over 18 years old')
} else {
    console.log('None person is over 18 years old')
}

