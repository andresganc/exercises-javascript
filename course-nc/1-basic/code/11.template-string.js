

// CONCATENACION
// Es encadenar cadenas de texto

let name = "Andres"
let lastname = "Giraldo"

let saludo = "Hola mi nombre es " + name + " " + lastname + "."

console.log(saludo)



// INTERPOLACION
// Meter detro una cadena texto el valor dinamicamente con Template String
// Salio en ES6 - EcmaScript2015 y es muy recomendada por ser muy declarativa
// y menos confusa que la concatenacion 

// Ejemplo 1
let saludo2 = `Hola mi nombre es ${name} ${lastname}`

console.log(saludo2)

// Ejemplo 2
// Con las template string y las comillas invertidas me permite agregar cualquier tipo de identacion sin generar error
// Cosa si pasa con las comillas dobles y las comillas simples
let codigoHtml = `
    <nav> 
        <ul> Inicio </ul>
        <ul> Aserca de </ul>
    </nav>
`
console.log(codigoHtml)




