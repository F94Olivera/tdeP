// 2). Solicitar al usuario que ingrese un nro, y mostrar por pantalla la tabla de multiplicar de ese nro.
// Continuar con la ejecución hasta que el usuario ingrese el nro cero.
console.log("ej2");

const prompt = require("prompt-sync")();

const number = parseInt(prompt("Ingrese numero: "))

console.log(`La tabla de multiplicar de ${number} es: `)
for (let i = 0; i <= 10; i++){
    const value = i * number
    console.log(`${number} * ${i} = ${value}`)
}

// alt version
// console.log(`La tabla de multiplicar de ${number} es: `)
// let i = 0
// while (i <= 10){
//     const value = i * number
//     console.log(`${number} * ${i} = ${value}`)
//     i++
// }