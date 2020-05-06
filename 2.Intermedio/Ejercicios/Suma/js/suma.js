
// Esta linea de codigo asegura que la pagina esta cargada
//$(document).on("ready", suma());

var resultado;


function main() {

    var total = document.getElementById("LabelTotal");
    var buttonSumar = document.getElementById("ButtonSumar");
    var buttonBorrar = document.getElementById("ButtonBorrar");

    // Paso 4.
    buttonSumar.onclick = function(e) {
        suma(); 
        total.textContent = resultado;
        e.preventDefault();
    }

    buttonBorrar.onclick = function(e) {
        borrar();
    }
}


function suma() {
    // Paso 1 & 2
    var numero1 = document.getElementById("InputNumero1").value;

    var numero2 = document.getElementById("InputNumero2").value;

    var numero3 = document.getElementById("InputNumero3").value;
   
    // Paso 3
    resultado = ( parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) );
}


function borrar(){
    document.getElementById("InputNumero1").innerHTML = 0;
    document.getElementById("InputNumero2").innerHTML = 0;
    document.getElementById("InputNumero3").innerHTML = 0;
    document.getElementById("LabelTotal").innerHTML = 0;    
}


