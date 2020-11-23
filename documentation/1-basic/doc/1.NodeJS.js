/* ======================= NODEJS ========================== */
//  


// INPUT de datos por consola en NodeJS
// process.openStdin();
var numero1 = 5;


console.log("Inserte un numero");

// Solicitud de dato por consola
var numero1 = process.openStdin();

// Impresion de dato por consola en NodeJS
numero1.addListener("data", function(d){
    console.log("El numero que insertaste es:" + d.toString().trim());
});