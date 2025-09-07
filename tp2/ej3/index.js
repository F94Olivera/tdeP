// 3).  Escribir un algoritmo que determine si un año ingresado por el usuario es bisiesto o no (un año
// es bisiesto si es divisible por cuatro, y en caso que sea también divisible por 100 (1800, 1900, etc),
// el año tiene que ser también divisible por 400.
// .. El programa debe continuar en ejecución hasta que el usuario decida terminarlo.

//  ESTE EJERCICIO ESTA MAL ESCRITO TERMINE HACIENDO UN LOOP QUE SI INGRESA CERO CORTA LA EJECUCION

console.log("ej3");

const prompt = require("prompt-sync")();

const year = parseInt(prompt("Ingrese año: "))
while (year != 0){
    if (( year % 4 == 0 ) &&
        (year % 100 != 0 || year % 400 == 0)){
        console.log("ES BISIESTO")
    } else {
        console.log("NO ES BISIESTO")
    }
}
