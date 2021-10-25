/* Objeto console en JavaScript */

console.log(console); /* ==> Es un objeto con varios grupos de funciones */
console.error('Esto es un error') /* ==> Es un objeto de tipo error */
console.warn('Esto es un aviso') /* ==> Es un objeto de tipo aviso */
console.info('Hola, ¿como estas?')/* ==> Esto es un objeto informativo */
console.log('Esto es un registro de lo que paso en la aplicacion') /* ===> Esto es un objeto registrativo */
console.clear() /* ===> Esto sirve para limpiar la consola */
console.dir() /* ===> Sirve para ver los elementos de un metodo */


let nombre = 'Andres Felipe'
apellido = 'Jaramillo Gonzalez'
edad = 22
console.log('Hola, ¿como estas? mi nombre es: %s %s, tengo %d años.', nombre, apellido, edad) /* Usando comodines en JavaScript */


console.group('React Js') /* Sirve para agrupar console, el console.groupCollage es lo mismo */
console.log('Curso de aprendiendo React Midudev')
console.log('Curso de aprendiendo React Jhonatan Mircha')
console.groupEnd() /* Asi acabas un grupo de console */

let datos = {
    nombre: 'Andres Felipe',
    apellidos: 'Jaramillo Gonzalez',
    edad: 22,
    hobbies: 'Aprender React, Reforzar JavaScript'
}
console.table(datos) /* Sirve para ver datos en tablas */

const numeros = [1, 2, 3, 4, 5]
const vocales = ['a', 'e', 'i', 'o', 'u']
console.table(numeros) /* Ver numeros en tablas */
console.table(vocales) /* Ver vocales en tablas */

console.time('Cuanto tiempo tarda mi codigo ==> inicio') /* Sirve para saber cuanto tiempo tarda el codigo */
const array = Array(10000)
for (let index = 0; index < array.length; index++) {
    array[index] = index
}
console.timeEnd('Cuanto tiempo tarda mi codigo ==> final'); /* Sirve para saber cuanto tiempo tarda el codigo */

for (let index = 0; index <= 100; index++) {
    console.count('El codigo se ejecuto una cantidad de veces') /* Sirve para saber cuantas veces se ejecuto un codigo */
    console.log(`El numero es: ${index}`)
}

let numeroUno = 10
let numeroDos = 20
let pruebaNumeroUnoNumeroDos = 'Numero uno es menor que dos'
console.assert(numeroUno < numeroDos, { numeroUno, numeroDos, pruebaNumeroUnoNumeroDos }) /* Se realiza prueba pequeñas */

