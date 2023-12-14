/* Implementacio de clase Producto con sus atributos y metodos */

class Producto{
    constructor(codigo, descripcion, precioCompra, cantidadMinBodega, cantidadMaxBodega, porcentajeDescuento){
        this.codigo = codigo
        this.descripcion = descripcion
        this.precioCompra = precioCompra
        this.cantidadMinBodega = cantidadMinBodega
        this.cantidadMaxBodega = cantidadMaxBodega
        this.porcentajeDescuento = porcentajeDescuento
    }

    soliProduct(nombre){
        if (nombre == this.descripcion) {
            return false;
        } else {
            return true;
        }
    }
}

const op = -1;

while(op !== 0){
    const options = parseInt(prompt(`
        1). Solicitar Pedido
        0). CERRAR
    `))

    switch (options) {
        case 1:
            const acetaminofen = new Producto ("A1", "acetaminofen", 2000, 0, 100, 2);
            const busqueda = prompt("Producto a buscar: ").toLowerCase();
            alert(acetaminofen.soliProduct(busqueda));
            break;
    
        case 0:
            op = 0;
            break;

        default:
            alert("Opcion no valida");
            break;
    }
}

