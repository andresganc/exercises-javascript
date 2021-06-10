

export function Loader() {
    // Creamos la varible con $ porque es un elemento del DOM (Buena practica)
    const $loader = document.createElement('img');
    
    $loader.alt = 'Cargando';
    $loader.src = './app/assets/img/loader-21.gif';
    $loader.width = '350';
    $loader.classList.add('loader');
    return $loader;
}