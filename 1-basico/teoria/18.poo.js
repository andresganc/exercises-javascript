
// ========================= POO - Programacion Orientada a Objetos (OOP - Object-oriented programming) =======================

// Existen varios paradigmas de programacion

// Programacion Orientado a Procedimientos: Lenguajes antiguos

// Programacion Imperativa

// Programacion Declarativa

// Programacion Logica

// Programacion Orientada a Objetos¨: Lenguajes modernos

// Programacion orientada a Funciones : Lenguajes modernos


// PROGRAMACION ORIENTADO A OBJETOS

// Caracteristicas y Capacidades

// Carro

// Caracteristicas (Propiedades): PuertaColor, TamañoRuedas, Ventanas, Motor. 

// Capacidades (Metodos): Arrancar, Acelerar, Frenar, Girar.

// Carro 1 (Familiar)
// Propiedades              -               Metodos

// puertaColor : Azules                     // Arrancar
// ruedasTamaño : Pequeñas                  // Acelerar
// ventanas : Cristal Pequeñas              // Frenar
// motor : 1200cc                           // Girar


// Carro 2 (Carreras)
// Propiedades              -               Metodos

// puertaColor : Gris                       // Arrancar   (Mas rapido)
// ruedasTamaño: Grandes                    // Acelerar   (Mas rapido)
// ventanas : Sin ventanas                  // Frenar     (Mas rapido)
// motor : 10000cc                          // Girar      (Mas rapido)


// Button de (HTML5 - React)
// Propiedades                              Metodos

// color:   Azul                            // Click                            
// ancho:   100px                           // Focus
// alto:    100px                           // Moverse
// titulo:  Suma                            // Activo
// bordes:  Redondeados                     // Inactivo




// =========================== NOMENCLATURA DEL PUNTO =========================

// ========= PROPIEDADES ===========

// objeto.propiedad="";
// objeto.metodo();


// Ej Objeto: carro1
// carro1.puertaColor="Azul";

// Ej Objeto: button
// button.color="Azul";


// ========= METODOS ===========

// objeto.metodo();


// Ej Objeto: carro1
// carro1.arrancar();



// Usos reales dentro del lenguaje

// Ej Objeto: button
// button.color="Azul"
// button.inactivo();


// console.log();
// window.alert();



// ================================================================
// SINTAXIS

// Declarara objetos con el constructor - Casi no es usada
const objetoConConstructor = new Object()

//
let objetoConLet = {

}

// Al declarar objetos con consts evito que otro objeto ocupe la referencia que en memoria 
// Tiene este objeto.
const objetoConConst = {

}

// ejemplo objeto
const _94474361 = {
    nombre: 'Andres',
    apellido: 'Giraldo',
    edad: 42,
    hobbies: ['Siclo montañismo', 'Fotografia', 'Aviacion virtual'],
    soltero: false,
    celular: 3153076495,
    email1: 'andresganc@gmail.com',
    redes: {
        facebook: '@andresganc',
        instagram: '@andresganc',
    },
    saludar: function() {
        console.log(`Hola :) mi nombre es : ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Puedes seguirme en facebook: ${this.redes.facebook} `)
    }
}

// Tipo 
console.log(`Esto es un : ${typeof _94474361}`)

// Mostrar todo el objeto con sus propiedades o atributos
console.log(_94474361)

// Llamando una propiedad del objeto - Forma 1 mas usada
console.log(_94474361.nombre)

// Llamando una propiedad del objeto - Forma 2
console.log(_94474361 ['apellido'])

// Llamando un metodo del objeto ( Las funciones dentro de un objeto se llaman metodos )
_94474361.saludar()



// ====================== OBJETOS ========================


// ====================== METODOS ========================

// Object.keys()
// Metodo que lista las llaves de los objetos
console.log(Object.keys(_94474361))


// Object.values()
// Metodo que lista los valores de un objeto
console.log(Object.values(_94474361))


// Object.hasOwnProperty()
// Metodo para saber si la propiedad existe en el objeto
console.log(_94474361.hasOwnProperty('apellido'))
console.log(_94474361.hasOwnProperty('nacimiento'))




