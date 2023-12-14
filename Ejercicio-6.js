/* Verificacion de Palindromos */

let palabra = prompt("Escriba una palabra o frase: ")
let isPalindromo = false;

palabra = palabra.toLowerCase().replace(/[^\w]/g, "");

if(palabra === palabra.split("").reverse().join("")){
    isPalindromo = true;
} 

if (isPalindromo) {
    alert(`es un palíndromo`);
} else {
    alert(`no es un palíndromo`);
}