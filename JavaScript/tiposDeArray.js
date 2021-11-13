/* Tipos de array en JavaScript */

const array = ["Computadora", "Celular", ["Xiaomi", "Samsung", "Apple"]]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

/* Acceder a un array */

console.log(array) //Imprimir todo el array
console.log("Usted accedio a la posicion " + array[2][0]) //Acceder con referencias

const crearArreglo = Array.of("X", "Y", "Z") //Convertir elementos en un array
console.log(crearArreglo)

const arregloRandom = Array(5).fill(Math.floor(Math.random() * (1 - 50)) + 150) //Genera el mismo valor inicializado
console.log(arregloRandom)

const colores = ["Rojo", "Verde", "Azul"]
/* Agregar un elemento en un array */
colores.push("Negro")
console.log(colores)
/* Eliminar la ultima posicion */
colores.pop()
console.log(colores)

/*  */

colores.forEach(function (elemento) {
    console.log(`
    <li>${elemento}</li>
    `);
});

const carrito = [
    { nombre: "Ryzen 5600G", precio: 800 },
    { nombre: "Ryzen 5700G", precio: 1000 },
    { nombre: "Monitor 22 pulgadas", precio: 400 },
    { nombre: "Monitor 24 pulgadas", precio: 400 },
]

carrito.forEach(function (producto) {
    console.log(`El producto ${producto.nombre}, su precio es: ${producto.precio}`);
});