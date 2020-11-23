
// METODO USADO: String Split()
// let nc = Newsoft Computer empresa de servicios tecnologicos 
// nc.split(,)

function textoToArray(texto, separador) {
    return console.log(`El texto es ${texto} conversion a array: ${texto.split(separador)}`)
}

// Con coma separa por espacio
textoToArray('Newsoft Computer empresa de servicios tecnologicos', ',')

// Al poner espacio separa con coma
textoToArray('Newsoft Computer empresa de servicios tecnologicos', ' ')

// Sin espacio separa por letra
textoToArray('Newsoft Computer empresa de servicios tecnologicos', '')