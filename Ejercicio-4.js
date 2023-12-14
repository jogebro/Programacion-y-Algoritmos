/* Determine el número de billetes y monedas de curso legal equivalentes a cierta entrada de pesos (salida optimo) */

const billetes = [100000, 50000, 20000, 10000, 5000, 2000, 1000];
const monedas = [500, 200, 100, 50];

const entrada = parseInt(prompt("Digite la entrada: "));

const calcSalida = (entrada) => {
  const resultado = {};

  billetes.forEach(billete => {
    let numBilletes = Math.floor(entrada / billete);
    if (numBilletes > 0) {
      resultado["Billetes de " + billete] = numBilletes;
      entrada -= numBilletes * billete;
    }
  });

  monedas.forEach(moneda => {
    let numMonedas = Math.floor(entrada / moneda);
    if (numMonedas > 0) {
      resultado["Monedas de " + moneda] = numMonedas;
      entrada -= numMonedas * moneda;
    }
  });

  return resultado;
}

const salida = calcSalida(entrada);

let mensaje = "";
for (const key in salida) {
  mensaje += key + ": " + salida[key] + "\n";
}

alert(mensaje);