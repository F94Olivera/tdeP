// 5 . realizar un programa que permita convertir una determinada cantidad de horas y minutos ingresados por el
// usuario a segundos.

console.log("ej5");

const prompt = require("prompt-sync")();

const hours = parseInt(prompt("Ingrese numero de horas: "));
const minutes = parseInt(prompt("Ingrese numero de minutos: "));

let seconds = hours * 60 * 60 + minutes * 60;
console.log(`El total en segundos es: ${seconds}`);
