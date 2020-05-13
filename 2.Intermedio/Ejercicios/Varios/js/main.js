

function Mensaje2()
{
    alert("Mensaje dentro de un function y un js externo");

}

function Ejercicio1()
{
  var variable1 = "Aprendiendo JavaScript";
  var variable2 = 5;

  alert (variable1);
  alert (variable2);
}

function Ejercicio3()
{
  var nombre = "Andres";
  var apellido = "Giraldo";

  document.write("<p>");
  document.write(nombre + " " + apellido);
  document.write("</p>");
}

function OnMouseOver()
{
  alert("Script ejecutado al pasar con el mouse sobre la zona");
}


function ejecutar()
{
	document.getElementsByTagName("p") [0].onclick=Mensaje1;
}

window.onload=ejecutar;
