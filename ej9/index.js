// 9 . realizar un programa que permita calcular el total a pagar en un estacionamiento
// ingresando el horario de entrada, de salida (las horas sin importar los minutos), y la cantidad de
// noches. Valor por menos de mediodía: $2000 la hora, por menos de 24hs: $1500 la hora. Y el valor de la hora
// por 24hs o más es $1300. Si tiene pago por mes, no hay que cobrar nada.

// 19
// 4

// 2 input
// horario entrada
// horario salida
// cantidad de noches

console.log("ej8");

const prompt = require("prompt-sync")();

const IsMonthlyClient = parseInt(prompt("Es cliente mensual "));
if (IsMonthlyClient) {
    console.log("Es cliente mensual");
}

const entryHour = parseInt(prompt("Ingrese hora de entrada: "))
const exitHour = parseInt(prompt("Ingrese hora de salida: "))
const nights = parseInt(prompt("Ingrese cantidad de noches: "))


// caso 1 exitHour > entryHour && nights == 0
// caso 2 exitHour < entryHour && nights > 0
// caso 3 exitHour > entryHour && nights > 0
