// 4). Dados dos números enteros ingresados por el usuario realizar un algoritmo que calcule el cociente y el resto de su división entera.
//  sin utilizar el operador %.

console.log("ej4.1");

const prompt = require("prompt-sync")();

const dividendo = parseInt(prompt("Ingrese dividendo: "))
const divisor = parseInt(prompt("Ingrese divisor: "))

const result = Math.floor(dividendo/divisor)
let remainder = dividendo - (divisor * result)

console.log("result ", result)
console.log("remainder ", remainder)
