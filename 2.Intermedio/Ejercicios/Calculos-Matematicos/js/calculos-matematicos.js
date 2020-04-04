// Esta linea de codigo asegura que la página esta cargada 
$(document).on("ready", Calculo());

function Calculo() {
    
        var eleccion = document.getElementById("selectseleccionar").value;
        

        if (eleccion == "suma") {
            suma();
        } else if (eleccion == "resta") {
            resta();
        } else if (eleccion == "multiplicar") {
            multiplicacion();
        } else if(eleccion == "dividir") {
            division();
        }

    }




    function suma() {

        // paso  2 (Almacenar en variables)

        var numero1 = document.getElementById("Inputnumero1").value;

        var numero2 = document.getElementById("Inputnumero2").value;
    
        var resultado = ( ( parseInt(numero1) + parseInt(numero2) ) );
   

        window.alert("Estos son los numero que ingreso: " + numero1 + " + " + numero2 + " + " + "El resultado de la suma es:" + resultado);

    }


    function resta() {
        

        var numero1 = document.getElementById("Inputnumero1").value;

        var numero2 = document.getElementById("Inputnumero2").value;
    
        var resultado = ( ( parseInt(numero1) - parseInt(numero2) ) );
   

        window.alert("Estos son los numero que ingreso: " + numero1 + " - " + numero2 + " + " + "El resultado de la resta es:" + resultado);


    }
    

    function multiplicacion() {
       

        var numero1 = document.getElementById("Inputnumero1").value;

        var numero2 = document.getElementById("Inputnumero2").value;
    
        var resultado = ( ( parseInt(numero1) * parseInt(numero2) ) );
   

        window.alert("Estos son los numero que ingreso: " + numero1 + " * " + numero2 + " + " + "El resultado de la multiplicación es:" + resultado);
    }


    function division() {
        

        var numero1 = document.getElementById("Inputnumero1").value;

        var numero2 = document.getElementById("Inputnumero2").value;
    
        var resultado = ( ( parseInt(numero1) / parseInt(numero2) ) );
   

        window.alert("Estos son los numero que ingreso: " + numero1 + " / " + numero2 + " + " + "El resultado de la división es:" + resultado);
    }

  
