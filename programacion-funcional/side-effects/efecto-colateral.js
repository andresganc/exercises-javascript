
// SIDE EFFECTS - EFECTOS COLATERALES

/*
Sucede cuando se declaran variables de forma global y estas pueden ser
modificadas de por error y generar bugs que son muy dificiles de encontrar
*/

// Ejemplo 1 

let miVarible = 45;     // Variable global que puede generar muchos problemas

function funcion1() {
    // funcion
};