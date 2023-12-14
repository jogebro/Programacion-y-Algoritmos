/* Hallar el promedio de notas de un curos de N estudiantes */

let estudiantes = 2;
let notas = 0;

for (let i = 1; i <= estudiantes; i++) {
    const nota = parseInt(prompt(`Nota del estudiante ${[i]}`));
    notas = notas + nota;
    alert(notas);
}

const promedio = notas / estudiantes;
alert(promedio);