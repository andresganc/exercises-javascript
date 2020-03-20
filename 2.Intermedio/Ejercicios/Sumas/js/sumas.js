$(document).on("ready", sumar);

function sumar() {

    var numero1 = document.getElementById('InputNumero1').value;
    var numero2 = document.getElementById('InputNumero2').value;
    var numero3 = document.getElementById('InputNumero3').value;

    var resultado = parseInt(numero1) + parseInt(numero2) + parseInt(numero3);

    

    
    // Impresion a label desde JavaScript
    // Forma 1: Con getElementById
    document.getElementById('LabelResultado').innerHTML = resultado;
    //document.getElementById('LabelResultado').innerHTML = 'Ejemplo con cadena de texto';

    // Forma 2: Con querySelector
    //document.querySelector('#LabelResultado').innerText = resultado;
    //document.querySelector('#LabelResultado').innerText = 'Ejemplo con cadena de texto';

    // Forma 3: Usando Boostrap - JQuery
    //$("#LabelResultado").text(resultado);

    alert("La suma es: " + resultado);

}