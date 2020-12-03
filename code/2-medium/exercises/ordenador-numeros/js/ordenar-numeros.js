// Esta linea de codigo asegura que la pagina esta cargada
$(document).on("ready", ordenarnumeros());


function ordenarnumeros() {

    var orden = document.getElementById("selectOrden").value;

    window.alert (orden)

    if (orden == "menoramayor") {
        menormayor();
    } else if (orden == "mayoramenor"){
        mayormenor();
    }

}


function menormayor() {

    // Paso 1 & 2
    var numeroA = document.getElementById("InputNumeroA").value;

    var numeroB = document.getElementById("InputNumeroB").value;

    var numeroC = document.getElementById("InputNumeroC").value;

    
    // Paso 3
    
    if ((numeroA < numeroB) && (numeroB < numeroC))

    window.alert('El orden es: ' + numeroA + '<' + numeroB + '<' + numeroC);
    
    else if ((numeroA < numeroC) && (numeroC < numeroB))
    
        window.alert('El orden es: ' + numeroA + ' < ' + numeroC + ' < ' + numeroB);
    
    else if ((numeroB < numeroA) && (numeroA < numeroC))
    
        window.alert('El orden es: ' + numeroB + ' < ' + numeroA + ' < ' + numeroC);
    
    else if ((numeroB < numeroC) && (numeroC < numeroA))
    
        window.alert('El orden es: ' + numeroB + ' < ' + numeroC + ' < ' + numeroA);
    
    else if ((numeroC < numeroA) && (numeroA < numeroB))
    
        window.alert('El orden es: ' + numeroC + ' < ' + numeroA + ' < ' + numeroB);
    
    else if ((numeroC < numeroB) && (numeroB < numeroA))
    
        window.alert('El orden es: ' + numeroC + ' < ' + numeroB + ' < ' + numeroA);

}



function mayormenor() {

    // Paso 1 & 2
    var numeroA = document.getElementById("InputNumeroA").value;

    var numeroB = document.getElementById("InputNumeroB").value;

    var numeroC = document.getElementById("InputNumeroC").value;

    
    // Paso 3
    
    if ((numeroA > numeroB) && (numeroB > numeroC))

    window.alert('El orden es: ' + numeroA + '>' + numeroB + '>' + numeroC);
    
    else if ((numeroA > numeroC) && (numeroC > numeroB))
    
        window.alert('El orden es: ' + numeroA + ' > ' + numeroC + ' > ' + numeroB);
    
    else if ((numeroB > numeroA) && (numeroA > numeroC))
    
        window.alert('El orden es: ' + numeroB + ' > ' + numeroA + ' > ' + numeroC);
    
    else if ((numeroB > numeroC) && (numeroC > numeroA))
    
        window.alert('El orden es: ' + numeroB + ' > ' + numeroC + ' > ' + numeroA);
    
    else if ((numeroC > numeroA) && (numeroA > numeroB))
    
        window.alert('El orden es: ' + numeroC + ' > ' + numeroA + ' > ' + numeroB);
    
    else if ((numeroC > numeroB) && (numeroB > numeroA))
    
        window.alert('El orden es: ' + numeroC + ' > ' + numeroB + ' > ' + numeroA);

}




