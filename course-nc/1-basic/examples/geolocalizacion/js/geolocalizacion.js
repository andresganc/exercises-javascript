var latitud;   // Variable para almacenar Latitud
var longitud;  // Variable para almacenar Longitud 
var velocidad; // Variable para almacenar Velocidad de movimiento
var vector;     // Variable para almacenar Orientacion de movimiento ()

$(document).on("ready", inicio);

function inicio ()
{
	geolocalizar();
}

function geolocalizar ()
{
	navigator.geolocation.getCurrentPosition(mostrar, correrencirculos);
	
}

function correrencirculos(errorsh)
{
	alert("Tarde o temprano te encontrare ¬_¬");
	console.log(errorsh);
	
}

function mostrar(geo)
{
latitud   = geo.coords.latitude;
longitud  = geo.coords.longitude;
velocidad = geo.coords.velocidad;
vector    = geo.coords.vector;
}
