
// Break Continue

// Se usa en ciertos casos para parar y continuar cuando se anecesario
// No se puede usar en los for each

const numeros = [5, 6, 9, 4, 8, 89, 45, 47, 98, 4587];

for ( let i=0; i < numeros.length; i++ ) {
    if ( i === 5 ){
        break;
    }
    //console.log(i)
    //console.log(numeros)
    console.log(numeros[i]);
}


for ( let i=0; i < numeros.length; i++ ) {
    if ( i === 5 ){
        continue;
    }
    //console.log(i)
    //console.log(numeros)
    console.log(numeros[i]);
}
