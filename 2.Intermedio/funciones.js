
// ============================================ FUNCIONES SIN PARAMETROS =================================


// Funcion suma sin recibir parametros
function suma() {

    var num1 = 5;
    var num2 = 5;

    var resultado = ( parseInt(num1) + parseInt(num2) );

    console.log("El resultado de la suma es :", resultado);
}

// Funcion resta sin recibir parametros
function resta() {

    var num1 = 8;
    var num2 = 2;

    var resultado = ( parseInt(num1) - parseInt(num2) );

    console.log("El resultado de la resta es :", resultado);
}




// ============================================ FUNCIONES CON PARAMETROS =================================

// Funcion sumaDatos con parametros (num1 , num2)
function sumaDatos( num1, num2 ) {

    var resultado = ( parseInt(num1) + parseInt(num2)); 
    
    console.log("El resultado de la suma es :", resultado);

}


// Funcion sumaDatos con parametros ( nombre, num1, num2, num3 )
function sumaDatosNombre( nombre, num1, num2, num3) {

    var resultado = ( parseInt(num1) + parseInt(num2) + parseInt(num3) ); 
    
    console.log("Hola ", nombre,  " el resultado de la suma es :", resultado);

}





//suma();       // Llamando funciones si

//sumaDatos( 10, 20 );

sumaDatosNombre ("Andres", 40, 60, 200);




