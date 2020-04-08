

// =========================== METODOS ============================

/*
los metodos son bloques de codigo que suelen estar dentro de una clase
*/


// Salta error porque un metodo no puede estar fuera de una clase.
/*
resta(){
   console.log("Hola"); 
}
*/



function operacionesMatematicas () {

    metodoSuma(
        console.log("Hola metodo suma")
    );
        // Codigo aqui


    metodoResta(
        console.log("Hola metodo resta")
    );

       
}

// Clase carro1 (Objeto carro1)
class carro1 {
    
    constructor(puertaColor, ruedasTamaño, ventanas, motor){
        this.puertaColor = "Amarilla";
        this.ruedasTamaño = "Pequeñas";
        this.ventanas = "";
        this.motor = 1200;
    }    
    
    // Metodo
    arrancar(){
        // Codigo aqui
    }

    // Metodo con return
    acelerar(){
        // Codigo aqui
        return ("Velocidad : " );
    }

    // Metodo esatico con return
    static frenar(){
        // Codigo aqui
        return;
    }

}

// Instanciar Clase carro1
var carro = new carro1

// Reasignar color de la puerta
carro.puertaColor = "Verde";

console.log ("La puerta es de color :", carro.puertaColor)