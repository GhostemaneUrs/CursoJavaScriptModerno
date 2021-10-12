/* Tipos de array en JavaScript */

const array = ["Computadora", "Celular", ["Xiaomi", "Samsung", "Apple"]]

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