
// ========== ASYNC AWAIT SEQUENTIAL =========
/* 
Con Async await sequential puedo ejecutar de manera secuancial 
diferentes tareas y todas trabajan de manera independiente asi
obtengan errores
*/

//import { taskOne, taskTwo } from './tasks.js';        // Module
const { taskOne, taskTwo } = require ('./tasks.js');  // Require

async function main() {
    console.time('Measuring time');
    // Async await secuencial
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd('Measuring time');

    console.log('Task One returned', valueOne);
    console.log('Task Two returned', valueTwo);
}

main();