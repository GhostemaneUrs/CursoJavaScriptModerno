/* Metodos de arrays en arreglos de indices y objetos */

/* Arreglo de indices */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

/* Arreglo de objetos */
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 800 },
    { nombre: 'Television', precio: 1000 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Soporte Audifonos', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/* comprobar si un valor existe con includes */
const comprobarMeses = (mes) => {
    if (!mes) {
        console.log('La variable esta vacia');
    } else if (typeof mes !== 'string') {
        console.log('La variable no es un string');
    } else if (typeof mes === 'string') {
        const resultado = meses.includes(mes)
        resultado ? console.log(`El mes ${mes} existe`) : console.log(`El mes ${mes} no existe`);
    }
}
comprobarMeses('Diciembre');

/* En un arreglo se utiliza la funcion some */
const comprobarCarrito = (valor) => {
    if (!valor) {
        console.log('La variable esta vacia');
    } else if (typeof valor !== 'string') {
        console.log('La variable no es un string');
    } else if (typeof valor === 'string') {
        const existe = carrito.some((producto) => {
            return producto.nombre === valor
        });
        existe ? console.log(`El producto ${valor} existe`) : console.log(`El producto ${valor} no existe`);
    }
}
comprobarCarrito('Celular')

/* Encontrar el indice con findIndex en un arreglo de indices */
const comprobarMesesConFindIndex = (valor) => {
    if (!valor) {
        console.log('La variable esta vacia');
    } else if (typeof valor !== 'string') {
        console.log('La variable no es un string');
    } else if (typeof valor === 'string') {
        const resultado = meses.findIndex(mes => {
            return mes === valor
        });
        if (resultado < 0) {
            console.log(`El mes ${valor} no existe`)
        } else if (resultado >= 0) {
            console.log(`El mes ${valor} está en la posicion: ${resultado}`)
        }
    }
}
comprobarMesesConFindIndex('Agosto')

/* Encontrar el indice con findIndex en un arreglo de objetos */
const comprobarCarritoConFindIndex = (valor) => {
    if (!valor) {
        console.log('La variable esta vacia');
    } else if (typeof valor !== 'string') {
        console.log('La variable no es un string');
    } else if (typeof valor === 'string') {
        const resultado = carrito.findIndex(producto => {
            return producto.nombre === valor
        });
        if (resultado < 0) {
            console.log(`El producto ${valor} no existe`)
        } else if (resultado >= 0) {
            console.log(`El producto ${valor} está en la posicion: ${resultado}`)
        }
    }
}

comprobarCarritoConFindIndex('Celular')

/* Metodo reducer tomar una cantidad de datos para unirlos, solo mostrar uno*/
/* con un forEach */
let total = 0;
carrito.forEach(producto => {
    total += producto.precio;
});
console.log(`El total es: ${total}`);

/* con un reduce */
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(`El total con el metodo reduce es: ${resultado}`);


/* Extraes valores con el metodo filter */
const obtenerProductosPorPrecio = (precio) => {
    if (!precio) {
        console.log('La variable no puede ir vacia')
    } else if (typeof precio !== 'number') {
        console.log('La variable no es un numero')
    } else if (typeof precio === 'number') {
        const resultado = carrito.filter(producto => {
            return producto.precio >= precio
        })
        console.log(`Los productos al rango de precio ${precio} son:`, resultado);
    }
}

obtenerProductosPorPrecio(750)

const excluirProductosPorNombre = (nombre) => {
    if (!nombre) {
        console.log('La variable no puede ir vacia')
    } else if (typeof nombre !== 'string') {
        console.log('La variable no es un string')
    } else if (typeof nombre === 'string') {
        const resultado = carrito.filter(producto => {
            return producto.nombre !== nombre
        })
        console.log(`Los productos sin ${nombre} son:`, resultado)
    }
}

excluirProductosPorNombre('Celular')

/* Extraer valores con find */

/* Comparacion con un forEach */
obtenerProductoForEach = (nombre) => {
    let resultadoProducto = '';
    if (!nombre) {
        console.log('La variable no puede ir vacia')
    } else if (typeof nombre !== 'string') {
        console.log('La variable no es un string')
    } else if (typeof nombre === 'string') {
        carrito.forEach((producto, index) => {
            if (producto.nombre === nombre) {
                resultadoProducto = carrito[index]
            }
        })
        console.log(`Los productos con el metodo forEach son: `, resultadoProducto);
    }
}

obtenerProductoForEach('Tablet')

/* Comparacion con un fin solamente retorna uno */
obtenerValoresFind = (nombre) => {
    if (!nombre) {
        console.log('La variable no puede ir vacia')
    } else if (typeof nombre !== 'string') {
        console.log('La variable no es un string')
    } else if (typeof nombre === 'string') {
        const resultado = carrito.find(producto => {
            return producto.nombre === nombre
        })
        console.log(`Los productos con el metodo fin son: `, resultado);
    }
}

obtenerValoresFind('Tablet')


/* Metodo every todos los arreglos deben tener la condicion evaluda */

const resultadoEvery = carrito.every(producto => {
    return producto.precio < 500
})

resultadoEvery ? console.log('Se cumple la condicion') : console.log('No se cumple la condicion');










