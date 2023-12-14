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

    productoExiste(){
        return this.descripcion;
    }
}

let productos = [
    {
        codigo: 1,
        descripcion: "leche",
        precioCompra: 2000,
        cantidadMinBodega: 10,
        cantidadMaxBodega: 100,
        porcentajeDescuento: 5
    }
]

const producto = new Producto (productos[0]);
console.log(producto.productoExiste());