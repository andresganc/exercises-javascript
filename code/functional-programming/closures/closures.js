
// =============== CLOSURES ===============
/*
- Los closures son la combinacion de una funcion y el alcance lexico que tiene esta

- Los closures se crea al momento de nosotros ejecutar una funcion

- Es mas que nada el alcance que esta funcion ṕuede tener de las variables
     dentro y fuera de ella.

- Se crea un closure cuando uso una variable que esta afuera de la funcion
*/


// Ejemplo de una funcion que hace closure usando una varible externa y otra interna
const x = 'Marco'

const f = () => {
    const y = 'Giraldo'
    console.log(x, y)
}

f()