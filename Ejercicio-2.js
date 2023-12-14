/* Generar los n primeros terminos de la serie Fibonacci, la secuencia Fibonacci es una serie matematica en la que cada numero es la suma de los dos anteriores, comenzando con 0 y 1. La secuencia comienza: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, y asi sucesivamente */

let num1 = 0;
let num2 = 1;
let result = 0;

let n = parseInt(prompt('Digite un numero: '));

if (n >= 0) {
    if (n >= 2) {
        for (let i = 2; i <= n; i++) {
            result = num1 + num2;
            num1 = num2;
            num2 = result;
        }
    } else {
        if (n === 0) {
            result = num1;
        } else {
            result = num2;
        }
    }
    alert(`El numero Fibonacci de ${n} es: ${result}`);
} else {
    alert("Numero no valido");
}