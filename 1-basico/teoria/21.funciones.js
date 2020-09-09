

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
// Desde ES6 tambien se pueden inicializar los ṕarametros de ña funcion
function sumaDatosNombre( nombre, num1=0, num2=0, num3=0) {

    var resultado = ( parseInt(num1) + parseInt(num2) + parseInt(num3) ); 
    
    console.log("Hola ", nombre,  " el resultado de la suma es :", resultado);

}



//suma();       // Llamando funciones si

//sumaDatos( 10, 20 );

sumaDatosNombre ("Andres", 40, 60, 200);




function estoEsUnaFuncion() {
    console.log('uno')
    console.log('dos')
    return 20
    console.log('tres')
}

estoEsUnaFuncion()


function funcionQueDvuelveValor() {
    return 'La funcion a retornado una cadena de texto'
}

let fa = funcionQueDvuelveValor()

console.log(fa)

