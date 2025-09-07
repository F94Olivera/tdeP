// 3 Elaborar un algoritmo que solicite el número de respuestas correctas,
// incorrectas y en blanco, correspondientes a un postulante, y muestre su puntaje final
// considerando, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas
// tendrá -1 y respuestas en blanco tendrá 0.

console.log("ej3");

const prompt = require("prompt-sync")();

const correctAnswers = parseInt(prompt("Ingrese numero de respuestas correctas: "));
const incorrectAnswers = parseInt(prompt("Ingrese numero de respuestas incorrectas: "));
const nonAnswered = parseInt(prompt("Ingrese numero de respuestas en blanco: "));

let total = correctAnswers * 4 + incorrectAnswers * -1;
console.log("El puntaje total es " + total);
