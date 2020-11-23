
// ================== MAP ====================
// Realizar promedio de edades en los animales


// METODO IMPERATIVO
const numeros = [ 0, 1, 2, 3, 4, 5 ];

// Funcion de suma total
const suma = (datos) => {
    let acumulado = 0;

    for (i=0; i<datos.length; i++) {
        acumulado += datos[i];
    }
    return acumulado;
}

const resultadoImperativo = suma(numeros);
console.log('Resultado imperativo. Esta funcion solo trabaja con el array de numeros porque si le aplicamos la de mascotas arroja error.')
console.log(`Resultado imperativo: ${resultadoImperativo}`)



// METODO DECLARATIVO
// Array con datos de animales
const mascotas = [
    { animal: 'Perro', nombre: 'Puchini', edad: 6, raza: 'Gran danes' },
    { animal: 'Cerdo', nombre: 'Chanchito feliz', edad: 3, raza: 'Mini pig' },
    { animal: 'Perro', nombre: 'Pulga', edad: 8, raza: 'Chiguaga' },
    { animal: 'Loro', nombre: 'Pelusa', edad: 2, raza: 'Silvestre' },
];

// Primero estraigo las edades de las mascotas
//const resultadoDeclarativo = mascotas.map( (x => x.edad) / mascotas.length);
const edades = mascotas.map(x => x.edad);
const resultadoDeclarativo = suma(edades);
console.log(`Resultado declarativo ${resultadoDeclarativo / edades.length}`); 

