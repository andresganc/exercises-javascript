// JavaScript Document

//Genera un número aleatorio entre un rango de enteros
function NumAleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}




var piedra=0;
var papel=1;
var tijera=2;
var opciones = ["Piedra", "Papel","Tijera"];
var opcionusuario;
var opmaquina=NumAleatorio(0,2);



opcionusuario = prompt("Elije una opcion: \n Piedra: 0\n Papel: 1 \n Tijera: 2 ", 0);

alert("Elejiste " + opciones[opcionusuario]);
alert("La Maquina Elijio " + opciones[opmaquina]);

if (opcionusuario==piedra) 
	{

    if (opmaquina==piedra) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Empate");
    }
    else if (opmaquina==papel) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Perdiste");
    }
    else if (opmaquina==tijera) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Ganaste");
    }


	}

else if (opcionusuario==papel) 
	{

    if (opmaquina==piedra) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Ganaste");
    }
    else if (opmaquina==papel) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Empate");
    }
    else if (opmaquina==tijera) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Perdiste");
    }
	}

	else if (opcionusuario==tijera) 
	{

     if (opmaquina==piedra) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Perdiste");
    }
    else if (opmaquina==papel) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Ganaste");
    }
    else if (opmaquina==tijera) 
    {
    alert("Resultado: "+ opciones[opmaquina] +" Empate");
    }
	}
else
    {
alert("Eleccion Erronea");
	}