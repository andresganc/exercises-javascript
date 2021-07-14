
// ============= FUNCIONES DECLARADAS ==============
// Las funciones declaradas tienen la mala practica de que se pueden invocar desde cualquier parte
// Del codigo ( Por la norma antigua de js de elevacion de variables o hoisting del ingles "elevacion" ), Incluso antes de que la funcion sea declarada

// Llamando la funcion antes de crearla ( Mala practica )
funcionDeclarada()

function funcionDeclarada() {
    return console.log('Esto es un afuncion declarada puede invocarse desde cualquier parte del codigo')
}

funcionDeclarada()



// =========== FUNCIONES EXPRESADAS =============
//

// En la funcion expresada se almacena en una constante o let y ya no es necesario ponerle nombre
// Solo a la constante ( Esto se conoce como funcion anonima )

// Error que arroja si intento llamarla antes de su creacion ( Buena practica )
// error: Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization
//funcionExpresada()

const funcionExpresada = function() {
    return console.log('Esto es un a funcion expresada y no se puede llamar antes de su creacion')
}

funcionExpresada()