const primerosMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const segundosMeses = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 800 },
    { nombre: 'Television', precio: 1000 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Soporte Audifonos', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/* Unir arreglos con el metodo concat */
const meses = primerosMeses.concat(segundosMeses);
console.log(`Los meses unidos con el metodo concat quedan asi: [${meses}]`)

/* Unir arreglos con el spread operator */
const mesesSpread = [...primerosMeses, ...segundosMeses];
console.log(`Los meses unidos con el metodo spread quedan asi: [${mesesSpread}]`)


const agregarProducto = (producto) => {
    if (!producto) {
        console.log('El producto no puede ir vacio')
    } else if (typeof producto !== 'object') {
        console.log('El producto debe ser un objeto')
    } else if (typeof producto === 'object') {
        const carritoNuevo = [...carrito, producto];
        console.log(`El carrito nuevo queda asi:`, carritoNuevo)
    }
}

agregarProducto({ nombre: 'Disco SDD', precio: 300 });