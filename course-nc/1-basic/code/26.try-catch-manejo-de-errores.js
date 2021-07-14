
// TRY - CATCH - FINALLY
// Metodos para capturar errores
try {
    console.log('En el try se agrega el codigo a evaluar');
} catch(error) {
    console.log('Si en el codigo del try hay un error el catch lo captura')
} finally {
    console.log('El bloque finally se ejecutara siempre al final de un bloque try catch')
}


// Ejemplo
try {
    noexiste
} catch (error) {
    console.log(`Error. catch ha capturado un error. El error es: ${error}`);
    console.log('Ya no aparece el mensaje de error rojo en consola por que los errores ya los esta gestionando try catch');
}


// Lanzar un error
try {

    let numero = 10;
    //let numero = 'Andres';        // Genera el error por no ser un numero isNaN

    if (isNaN(numero)) {
        throw new Error('El caracter introducido no es un numero');
    }
    console.log(numero * numero);

} catch (error) {

    console.log(`Se produjo el siguiente error: ${error}`);
    
}