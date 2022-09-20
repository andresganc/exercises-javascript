
alert ("Prueba de llamada JavaScript con archivo aparte y sin funcion");

function prueba1()
{
	alert ("Prueba de llamada JavaScript con archivo aparte dentro de una FUNCION - evento onclick");
}

function prueba2()
{
	alert ("Prueba de llamada JavaScript con archivo aparte dentro de una FUNCION - evento onmouseover");
}

function prueba3()
{
	alert ("Prueba 3");
}

function ejecutar()
{
	document.getElementsByTagName("p") [0].onclick=prueba3;
}

window.onload=ejecutar;