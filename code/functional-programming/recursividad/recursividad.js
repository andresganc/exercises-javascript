
// ============ RECURSIVIDAD ===============
/*
La recursividad es una funcion que se llama a si misma una y otra vez hasta que
se cumple una condicion de salida.
*/

// Ejemplo 1:
// Funcion que recibe un parametro a y verifica en la condicion si a es < 0
// Imprime y se llama asi misma restandole -1
const conteoRegresivo = (a) => {
    if (a < 0) return 
        console.log(a)
        return conteoRegresivo(a - 1)
}

conteoRegresivo(10)



// Ejemplo 2:
/* Funcion que llama a una API con axios
    - Se va a usar la recursividad para hacer varios llamados adicionales en caso 
        de que este no responda en los primero intentos.
    - Se van a usar 6 intentos de llamados. Si despues de estos 6 llamados no respone
        se enviara un mensaje de error
*/  

//const axios = require('axios')    // Recomendado: No usar require 
//import { axios } from './axios'
import axiod from "https://deno.land/x/axiod/mod.ts";       // Axios para DENO

const llamarAPI = async (url, llamados = 0) => {
    
    try {

        const result = await axiod.get(url)
        
        console.log(result)
        return result    

    } catch (error) {

        if (llamados > 5) {
           return ''
        } 
        console.log(error)
        return llamarAPI(url, llamados + 1)

    }
}

llamarAPI('https://jsonplaceholder.typicode.com/users')
//llamarAPI('https://jsonplaceholder.typicode.com/posts/1')