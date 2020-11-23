
export function sumar(num1, num2){
    var resultado = num1 + num2;
    return resultado;
}

export function restar(num1, num2){
    return num1 - num2;
}

// Se puede agrupar las 2 funciones en un objeto y exportarlas junstas
export const operacionesAritmeticas = {
    sumar,
    restar
};

