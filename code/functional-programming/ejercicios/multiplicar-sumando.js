
const multiply = (a, b) => {
    
    let resultado = 0
    
    // Adquirir el valor absoluto de b
    const positivo = Math.abs(b) == b

    for(let i = 0; i < Math.abs(b); i++) {
        resultado = positivo ? resultado + a : resultado - a
    }

    return resultado
}

const a = multiply(5, 8)
console.log(a)