// Realizar un programa donde el usuario define el primer y ultimo nro del rango a mostrar por pantalla.
console.log("ej1.1");

const prompt = require("prompt-sync")();

const firstValue = parseInt(prompt("Ingrese valor inicial: "))
const lastValue = parseInt(prompt("Ingrese valor final: "))

for (let i = firstValue; i < lastValue; i++){
    console.log("i: ", i)
}