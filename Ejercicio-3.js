/* Generar un vector aleatoriamente y hallar el promedio, el maximo valor y el menor valor */

let vector = [];

for (let i = 0; i < 10; i++) {
  vector.push(Math.floor(Math.random() * 100));
}

let sum = 0;
for (let i of vector) {
  sum += i;
}

let promedio = sum / vector.length;
let max = Math.max(...vector);
let min = Math.min(...vector);

console.log(`Vector aleatorio:`, vector );

alert(`Vector aleatorio: [${vector}]` );
alert(`Promedio: ${promedio}`);
alert(`Valor maximo: ${max}`);
alert(`Valor minimo: ${min}`);