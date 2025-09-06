// 4 .  Elaborar un algoritmo que permita ingresar el número de partidos ganados, perdidos y empatados, por
// un equipo, se debe de mostrar su puntaje total, teniendo en cuenta que por cada partido ganado obtendrá 3
// puntos, empatado 1 punto y perdido 0 puntos.


console.log("ej4");

const prompt = require("prompt-sync")();

const matchesWon = parseInt(prompt("Ingrese numero de partidos ganados: "));
const matchesLost = parseInt(prompt("Ingrese numero de partidos perdidos: "));
const matchesTied = parseInt(prompt("Ingrese numero de partidos empatados: "));

let total = matchesWon * 3 + matchesTied * 1;
console.log("El numero de puntos totales es " + total);