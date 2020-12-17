
// =================== TRAMPOLINE ================

/*
- Cuando se hacen muchos llamados con recursividad puede salir un error
    como este (Maximum call stack size execeeded). Es cuando llamamos mas veces
    del numero permitido. Esto no pone una limitacion.

- Con la tecnica llamada trampolines podemos saltar esta barrera y poder realizar
    llamados las veces que queramos o cuanta memoria tenga la maquina eliminando
    asi la barrera del tail call optimization
*/



// Ejemplo de recursividad que arroja un error: Call stack size exceeded
const sumaRecursividad = (numberR, sumR = 0) => (
    numberR === 0
        ? sumR
        : sumaRecursividad(numberR - 1, sumR + numberR)
)

// Al elevar mucho el numero de repeticiones arrojara un error de call stack size exceeded
// Si agregamos otro 0 mas arrojara el error.
const resultRecursividad = sumaRecursividad(1000)
console.log(resultRecursividad);




// Ejemplo de la tecnica de trampoline para evitar el error call stack size exceeded

/*
Codigo trampoline
El codido es una funcion que recibe otra funcion que va realizando la operacion

const trampoline = fun => (...args) => {
    let result = fun(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result    
}

*/

// Usamos el codigo trampoline
const trampoline = fun => (...args) => {
    let result = fun(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}

// Modificamos un poco nuestro codigo para enviarlo al codigo trampoline y que haga su tarea
const sumaTrampoline = (numberT, sumT = 0) => (
    numberT === 0
        ? sumT
        : () => sumaTrampoline(numberT - 1, sumT + numberT)
)

// Al elevar mucho el numero de repeticiones arrojara un error de call stack size exceeded
const tsuma = trampoline(sumaTrampoline)
const resulTrampoline = tsuma(10000000000)
console.log(resulTrampoline);
