// 5). realizar un algoritmo que muestre por pantalla todos los números que hay entre 1 y 50. Luego muestre por pantalla todos
// los números entre 150 y 105 en orden decreciente.
// 3.3 agregar después solo los números divisibles por dos y por tres (por ejemplo el 6).

// NO SE SI ES ASI COMO LO PLANTIE YO PERO SIGUIENDO EXACTAMENTE COMO ESTA ESCRITO ES ASI

console.log("En orden creciente de 1 a 50")
console.log("solo divisibles por 2 y 3")
for (let i = 1; i <= 50; i++){
    if ( i % 2 == 0 && i % 3 == 0 ) {
        console.log("i: ", i);
    }
}

console.log("En orden decreciente de 150 a 105")
console.log("solo divisibles por 2 y 3")
let i = 150;
while ( i >= 105 ) {
    if ( i % 2 == 0 && i % 3 == 0 ) {
        console.log("i: ", i);
    }
    i--;
}