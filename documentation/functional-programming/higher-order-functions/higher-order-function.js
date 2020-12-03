
// ====== HIGHER ORDER FUNCTIONS - FUNCIONES DE ALTO ORDEN ========
/*
Las funciones de alto orden son funciones que contienen
y devuelven otras funciones realizando una tarea 
Se usa mucho para crear constructores de funciones que hagan
trabajos y tareas.
*/

// Ej: Funcion que crea un correo en varios proveedores pasandole solo el nombre

function crearCorreo(proveedorCorreo) {
    return function (nombreUsuario) {
        return `${nombreUsuario}@${proveedorCorreo}`
    }
}

let crearCorreoGmail = crearCorreo('gmail')
let crearCorreoOutlook = crearCorreo('outlook')

console.log(crearCorreoGmail('andres'))
console.log(crearCorreoOutlook('andres'))