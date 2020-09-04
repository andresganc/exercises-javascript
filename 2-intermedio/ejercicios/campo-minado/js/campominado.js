//

alert("Hola");
function Ganaste()
{
	alert("Ganaste");
	document.write("Haz elejido un campo no minado FELICITACIONES");
}

function Perdiste()
{
	alert("BOOMM");
	document.write("Elejiste un campo minado PERDISTE :(");
}

var TextosCampo =  ["Cesped", "Bomba"];
var x, y;
var posicion;
var campo = [ [ 0 , 0 , 1 ],
              [ 1 , 0 , 1 ],
              [ 1 , 0 , 1 ] ];

alert("Estas en un campo minado, elije una variable X y Y entre 0 y 2");


x = prompt ("Elije el campo X", 0)
y = prompt ("Elije el campo Y", 0)

posicion=campo[x][y];

if(posicion==1)
{
	Perdiste();	
}
else
{
	Ganaste();
}