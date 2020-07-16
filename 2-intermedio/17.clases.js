
// ========================================== CLASES ===========================================
/* 
Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. 
La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript 
proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.
*/

/*
Programación basada ​​en prototipos
La programación basada ​​en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y 
la reutilización de comportamiento (conocido como herencia en lenguajes basados ​​en clases) 
se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, 
orientada a prototipos o basada en ejemplos.

El ejemplo original (y más canónico) de un lenguaje basado en prototipos es el lenguaje de programación Self desarrollado por David Ungar y Randall Smith. 
Sin embargo, el estilo de programación sin clases se ha hecho cada vez más popular
y ha sido adoptado para lenguajes de programación como JavaScript, Cecil, NewtonScript, Io, MOO, REBOL, Kevo, Squeak 
(cuando se utiliza el Viewer framework para manipular los componentes Morphic) y varios otros. 2
*/

/*

Terminología

Clase
Define las características del Objeto.

Objeto
Una instancia de una Clase.

Propiedad
Una característica del Objeto, como el color.

Método
Una capacidad del Objeto, como caminar.

Constructor
Es un método llamado en el momento de la creación de instancias.

Herencia
Una Clase puede heredar características de otra Clase.

Encapsulamiento
Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.

Abstracción
La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.

Polimorfismo
Diferentes Clases podrían definir el mismo método o propiedad.

*/

// SINTAXIS
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

    // Metodo estaticos con return
    static frenar(){
        // Codigo aqui
    }
}

// Instanciar la clase carro1 (Al instanciar la clase lo que hacemos es convertirlo en objeto)
var carro = new carro1;

carro.puertaColor = "Rojo";

console.log ("La puerta del carro es de color :" , carro.puertaColor);

