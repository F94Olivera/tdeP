console.log("ej1");
// Se desea calcular la distancia recorrida (en metros) por un móvil
// que tiene una velocidad constante (m/s) durante un tiempo T (Sg), ambos valores
// ingresados por el usuario. Considerar que es un MRU (Movimiento Rectilíneo Uniforme).

// NECESITO 2 inputs del usuario
// speed
// time
// VOY A TENER 1 solo output
// distance
// CLAVE PARA ENTENDER
// La velocidad multiplicada por el tiempo me va a dar la distancia
const prompt = require("prompt-sync")();

const speed = parseInt(prompt("¿A qué velocidad va el móvil? "));
const time = parseInt(prompt("¿Por cuánto tiempo? "));
const distance = speed * time;

console.log("La distancia recorrida es: " + distance);
