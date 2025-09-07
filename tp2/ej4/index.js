// 4). Dados dos números enteros ingresados por el usuario realizar un algoritmo que calcule el cociente y el resto de su división entera.

console.log("ej4");

const prompt = require("prompt-sync")();

const dividendo = parseInt(prompt("Ingrese dividendo: "))
const divisor = parseInt(prompt("Ingrese divisor: "))

const result = Math.floor(dividendo/divisor)
const remainder = dividendo % divisor

console.log("result ", result)
console.log("remainder ", remainder)
