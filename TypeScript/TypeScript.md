
# TYPESCRIPT


## Tabla de Contenido

- [QUE ES TYPESCRIPT](#QUE_ES_TYPESCRIPT)
- [INSTALACION](#INSTALACION)
- [COMPILACION](#COMPILACION)
    - [Compilando de codigo de forma manual](#Compilando-de-codigo-de-forma-manual)
    - [Compilacion de codigo de forma automatica](#Compilacion-de-codigo-de-forma-automatica)
- [COMPILACION](#COMPILACION)
- [TIPOS DE DATOS](#TIPOS-DE-DATOS)
    - [Introduccion](#Introduccion)
    - [String](#Introduccion)



### QUE ES TYPESCRIPT

* TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Anders Hejlsberg, diseñador de C_Sharp y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.1​ TypeScript puede ser usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js y Deno (software)).

    TypeScript extiende la sintaxis de JavaScript, por tanto cualquier código JavaScript existente debería funcionar sin problemas. Está pensado para grandes proyectos, los cuales a través de un compilador de TypeScript se traducen a código JavaScript original.

    TypeScript soporta ficheros de definición que contengan información sobre los tipos de librerías JavaScript existentes, similares a los ficheros de cabeceras de C/C++ que describen la estructura de ficheros de objetos existentes. Esto permite a otros programas usar los valores definidos en los ficheros como si fueran entidades TypeScript de tipado estático. Existen cabeceras para librerías populares como jQuery, MongoDB y D3.js, y los módulos básicos de Node.js.

    El compilador de TypeScript está escrito asimismo en TypeScript, compilado a JavaScript y con Licencia Apache 2.



### INSTALACION

    - Instalar NodeJS

    - npm install -g typescript



### COMPILACION


#### Compilando de codigo de forma manual

    - tsc miarchivo.ts


#### Compilacion de codigo de forma automatica

    - Es molesto estar ejecutando el comando anterior cada vez que hagamos un cambio, Para eso existe una forma que vamos escirbiendo codigo y EL sistema va compilando automaticamente.
    
    - tsc miarchivo.ts --watch

    - tsc miarchivo.ts -w



### TIPOS DE DATOS

#### Introduccion

    - Para que los programas sean útiles, necesitamos poder trabajar con algunas de las unidades de datos más simples: números, cadenas, estructuras, 
    valores booleanos y similares. En TypeScript, admitimos casi los mismos tipos que esperaría en JavaScript, con un tipo de enumeración conveniente para ayudar a las cosas.


#### String

    - Otra parte fundamental de la creación de programas en JavaScript para páginas web y servidores es trabajar con datos textuales. Como en otros idiomas, usamos el tipo stringpara referirnos a estos tipos de datos textuales. Al igual que JavaScript, TypeScript también utiliza comillas dobles ( ") o comillas simples ( ') para rodear los datos de cadena.

    Ej:

    let color: string = "blue";
    color = 'red';


    - También puede usar cadenas de plantillas , que pueden abarcar varias líneas y tener expresiones incrustadas. Estas cadenas están rodeadas por el carácter backtick / backquote ( `), y las expresiones incrustadas son de la forma ${ expr }.

    Ej:

    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${ fullName }.

    I'll be ${ age + 1 } years old next month.`;


    - Esto es equivalente a declarar sentenceasí:

    Ej:

    let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";


#### Number

    - Como en JavaScript, todos los números en TypeScript son valores de coma flotante. Estos números de coma flotante obtienen el tipo number. Además de los literales hexadecimales y decimales, TypeScript también admite literales binarios y octales introducidos en ECMAScript 2015.

    Ej:

    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;


#### Boolean

    - El tipo de datos más básico es el valor verdadero / falso simple, que JavaScript y TypeScript llaman un booleanvalor.

    Ej:

    let isDone: boolean = false;
    let status: boolean = true || false


    



