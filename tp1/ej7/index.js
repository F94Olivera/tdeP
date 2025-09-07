// 7 . realizar un programa que permita al usuario ingresar un número por teclado y mostrar por pantalla
// si es par o no (pueden utilizar el operador %, que devuelve el resto de una división, por ejemplo 4%2
// es cero y 4/2 es dos).

console.log("ej7");

const prompt = require("prompt-sync")();

const number = parseInt(prompt("Ingrese un numero: "));

if (number % 2 == 0) {
    console.log("Es par");
}else{
    console.log("Es impar");
}

