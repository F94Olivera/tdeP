console.log("ej2");
// 2 Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales
// ingresadas por el usuario.

// NECESITO 3 inputs del usuario
// score1
// score2
// score3
// VOY A TENER 1 solo output
// average
// CLAVE PARA ENTENDER
// formula de promedio

const prompt = require("prompt-sync")();

const score1 = parseInt(prompt("Ingrese nota 1: "));
const score2 = parseInt(prompt("Ingrese nota 2: "));
const score3 = parseInt(prompt("Ingrese nota 3: "));

const average = (score1 + score2 + score3)/3;
console.log("El promedio es: " + average);
