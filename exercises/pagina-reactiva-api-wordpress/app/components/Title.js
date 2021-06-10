
import api from '../helpers/wp-api.js'

export function Title() {
    // Creamos la varible con $ porque es un elemento del DOM (Buena practica)
    const $h1 = document.createElement('h1');
    
    $h1.innerHTML = `
    <a href="${api.DOMAIN}" target="_blank">
        ${api.NAME.toUpperCase()}
    </a>
    `
    return $h1
}