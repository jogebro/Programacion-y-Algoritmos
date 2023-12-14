/* Suma de Números Primos */

const esPrimo = (num)=>{
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num !== 1 && num !== 0;
}
    
const sumaNumerosPrimos = (n)=>{
    let suma = 0;
    for (let i = 2; i <= n; i++) {
        if (esPrimo(i)) {
            suma += i;
        }
    }

    return suma;
}

const n = parseInt(prompt("Digite un numero entero positivo: "))
alert("Resultado: " + sumaNumerosPrimos(n));