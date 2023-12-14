/* Hallar el promedio de notas de un curos de N estudiantes */

const estudiantes = parseInt(prompt("Numero de estudiantes"));
let notas = 0;

for (let i = 1; i <= estudiantes; i++) {
    const nota = parseInt(prompt(`Nota del estudiante ${[i]}`));
    notas = notas + nota;
}

const promedio = notas / estudiantes;
alert("Promedio de notas: " + promedio);