
// ========== ASYNC AWAIT PARALLEL =========
/* 
- Con Async await parallel puedo ejecutar de manera parralela
y hacer que las tareas tarden menos 
- Las diferentes tareas trabajan de manera independiente asi
obtengan errores
*/

//import { taskOne, taskTwo } from './tasks.js';        // Module
const { taskOne, taskTwo } = require ('./tasks.js');  // Require

async function main() {
    console.time('Measuring time')
   
    /*
    // Async await secuencial
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    
    */

   // Async await parallel
    const results = await Promise.all([taskOne(), taskTwo()])

    console.timeEnd('Measuring time');

    console.log('Task One returned', results[0]);
    console.log('Task Two returned', results[1]);
}

main();