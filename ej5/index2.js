// 5.b. idem, pero el usuario ingresa cantidad de segundos y se muestra por pantalla las horas y minutos
// equivalentes (redondeando minutos hacia arriba).

console.log("ej5.1");

const prompt = require("prompt-sync")();

const totalSeconds = parseInt(prompt("Ingrese numero de segundos: "));

const hours = Math.floor(totalSeconds / 3600);

const minutes = Math.ceil((totalSeconds % 3600) / 60)

console.log(`${totalSeconds} segundos equivalen a: ${hours} horas y ${minutes} minutos (aprox).`);
