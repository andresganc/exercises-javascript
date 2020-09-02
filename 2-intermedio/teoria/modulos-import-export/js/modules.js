
// En JavaScript puro de llamar el archivo con la extension .js
import { pi } from './variables.js';
import { a } from './variables.js';
import { sumar, restar} from './operaciones.js';
import { operacionesAritmeticas } from './operaciones.js';

console.log( "El valor de PI es: ", pi );
console.log( a );

console.log( sumar(8, 9) );
console.log( restar(458, 187) );

console.log( operacionesAritmeticas.sumar(698, 458) );
console.log( operacionesAritmeticas.restar(7894, 654) );
