// #############################################
// P.O.O (Programación Orientada a Objetossssss)
// #############################################

// ¿Qué es la P.O.O?
/*
Es un paradigma de programación que se basa en el 
uso de "objetos" para representar entidades del mundo real dentro del software.
Cada objeto es una instancia de una clase, donde una clase es una plantilla
que define las propiedades (atributos) y comportamientos (métodos) que los objetos de este
tipo tendrán.


En términos generales, los pilares de la P.O.O son:
Abstracción : Representar entidades del mundo real con sus características esenciales.

Encapsulamiento : Ocultar los detalles internos y exponer solo lo necesario.

Herencia: Reutilizar código mediante una relación de tipo "es-un".

Polimorfismo: Permite que un mismo método se comporte de diferentes formas según el
contexto.

*/
const CuentaBancaria = require('./models/CuentaBancaria');
const Persona = require ('./models/Persona');
const Perro = require ('./models/Perro');
const pedro = new Persona('Pedro',25);
pedro.saludar();


const cuenta = new CuentaBancaria('Pedro',1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo())
//console.log(cuenta.#saldo);

const animal = new Perro("Paco");
animal.hablar();