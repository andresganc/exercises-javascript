
// METODO USADO: String Substring()
// texto.substring(0,4)

function recortarTexto(texto, from, to) {
    return console.log(`El texto es ${texto} los caracteres a mostrar son desde ${from} 
    hasta el ${to}. El resultado es: ${texto.substring(from,to) }`)
}

recortarTexto('Newsoft Computer', 1, 9)