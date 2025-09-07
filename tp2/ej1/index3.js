// mostrar por pantalla la sumatoria de todos los nros que se encuentran entre el rango especificado
// por el usuario (por ejemplo si ingresa 2 y 5, el resultado será: 14 (2+3+4+5).
console.log("ej1.3");

const prompt = require("prompt-sync")();

const firstValue = parseInt(prompt("Ingrese valor inicial: "))
const lastValue = parseInt(prompt("Ingrese valor final: "))

let acc = 0
for (let i = firstValue; i <= lastValue; i++){
    acc += i
}
console.log("La sumatoria del rango ingresado es: ", acc)