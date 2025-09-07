// . 6 . ingresar el radio del circulo de la base de un cilindro y su altura, para mostrar por pantalla
// el volumen de dicho cilindro (pi x radio x radio x altura).

console.log("ej6");

const prompt = require("prompt-sync")();

const radio = parseInt(prompt("Ingrese radio del cilindro: "));

const height = parseInt(prompt("Ingrese altura del cilindro: "));

const volumeCylinder = radio ** 2 * Math.PI * height;

console.log(`${volumeCylinder} es el volumen del cilindro`);
