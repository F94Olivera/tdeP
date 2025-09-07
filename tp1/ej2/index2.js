console.log("ej2");
// Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales
// ingresadas por el usuario.
// idem para tres alumnos, mostrando por pantalla si el alumno reprobó la materia (0-3)
// si aprobó (4-6) y si promocionó (7-10, y ningun aplazo en los parciales).

const prompt = require("prompt-sync")();

for (let  i = 0; i < 3; i++) {

    const score1 = parseInt(prompt("Ingrese nota 1: "));
    const score2 = parseInt(prompt("Ingrese nota 2: "));
    const score3 = parseInt(prompt("Ingrese nota 3: "));

    const average = (score1 + score2 + score3)/3;

    console.log("El promedio es: " + average);

    if (average <= 3) {
        console.log("reprobado, recursa materia");
    }else if (4 <= average && average <= 6) {
        console.log("aprobado, rinde final");
    }else if (7 <= average && 4 <= score1 && 4 <= score2 && 4 <= score3) {
        console.log("promociona");
    }else {
        // caso donde da el promedio pero tiene alguna nota aplazada
        console.log("aprobado, rinde final");
    }
}
