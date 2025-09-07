// 4). Dados dos números enteros ingresados por el usuario realizar un algoritmo que calcule el cociente y el resto de su división entera.
// 2.2. obtener el mismo resultado utilizando unicamente sumas y restas.

console.log("ej4.2");

const prompt = require("prompt-sync")();

const dividendo = parseInt(prompt("Ingrese dividendo: "))
const divisor = parseInt(prompt("Ingrese divisor: "))

let cociente = 0
let acc = 0
while (dividendo >= acc && (acc + divisor) <= dividendo) {
    acc += divisor
    cociente++
}

const remainder = dividendo - acc

console.log("cociente ", cociente)
console.log("remainder ", remainder)
