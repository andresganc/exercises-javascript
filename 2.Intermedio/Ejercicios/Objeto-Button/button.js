
// Clase button (Objeto button)
class buttonNC {

    constructor (ancho, alto, color){
        this.ancho = 80;
        this.alto = 40;
        this.color = "gris";
    }

    // Metodo click (Evento que se produce cuando se hace click)
    click() {
        // codigo
        return ("Se produjo el evento click");
    }

    // Metodo activo (Evento que activa el boton )
    activo() {
        // codigo
        return ("Se activo el boton");
    }

    // Metodo inactivo (Evento que in-activa el boton )
    inactivo() {
        // codigo
        return ("Se in-activo el boton");
    }


}


export default buttonNC;