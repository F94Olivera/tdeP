// 8 . ingresar por teclado los tres lados de un triangulo y mostrar por pantalla primero si es
// posible formar un triángulo con esos datos, y, en caso positivo, qué tipo de triángulo es (todos los
// lados iguales, equilatero, dos iguales isoceles y todos diferentes escaleno).
// .. Un triángulo es válido sólo si la suma de dos de sus lados es mayor al lado restante.

console.log("ej8");

const prompt = require("prompt-sync")();

const lado1 = parseInt(prompt("Ingrese lado1 del triangulo: "))
const lado2 = parseInt(prompt("Ingrese lado2 del triangulo: "))
const lado3 = parseInt(prompt("Ingrese lado3 del triangulo: "))

if (!(lado1 + lado2 > lado3 &&
    lado2 + lado3 > lado1 &&
    lado3 + lado1 > lado2)) {
    console.log("triangulo invalido")
}else {
    console.log("triangulo valido")

    if(lado1 == lado2 && lado2 == lado3){
        console.log("EQUILATERO")
    }else if((lado1 == lado2) ||
        (lado2 == lado3) ||
        (lado3 == lado1)) {
        console.log("ISOSCELES")
    }else {
        console.log("ESCALENO")
    }
}
