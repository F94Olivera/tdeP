// 5). realizar un algoritmo que muestre por pantalla todos los números que hay entre 1 y 50. Luego muestre por pantalla todos
// los números entre 150 y 105 en orden decreciente.
// 3.2 agregar después las listas de ese mismo rango de números pero solo los divisibles por dos, luego solo los divisibles por
// tres y luego solo los divisibles por cinco.

// NO SE SI ES ASI COMO LO PLANTIE YO PERO SIGUIENDO EXACTAMENTE COMO ESTA ESCRITO ES ASI

console.log("En orden creciente de 1 a 50")
console.log("solo divisibles por 2")
for (let i = 1; i <= 50; i++){
    if ( i % 2 == 0 ) {
        console.log("i: ", i);
    }
}
console.log("solo divisibles por 3")
for (let i = 1; i <= 50; i++){
    if ( i % 3 == 0 ) {
        console.log("i: ", i);
    }
}
console.log("solo divisibles por 5")
for (let i = 1; i <= 50; i++){
    if ( i % 5 == 0 ) {
        console.log("i: ", i);
    }
}

console.log("En orden decreciente de 150 a 105")
console.log("solo divisibles por 2")
let i = 150;
while ( i >= 105 ) {
    if ( i % 2 == 0 ) {
        console.log("i: ", i);
    }
    i--;
}
console.log("solo divisibles por 3")
i = 150;
while ( i >= 105 ) {
    if ( i % 3 == 0 ) {
        console.log("i: ", i);
    }
    i--;
}
console.log("solo divisibles por 5")
i = 150;
while ( i >= 105 ) {
    if ( i % 5 == 0 ) {
        console.log("i: ", i);
    }
    i--;
}