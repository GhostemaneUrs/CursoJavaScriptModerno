/* Simbolos en JavaScript  */

let primerId = Symbol('id1');
let segundoId = Symbol('id2');

/* Funciona como si fueran propiedades privadas, sirve para poder ocultar ciertas propiedades */
const saludar = Symbol('saludar')
const nombre = Symbol('nombre')
const persona = {
    [nombre]: 'Andres'
}

persona.nombre = 'Andres Jaramillo'
persona[saludar] = () => {
    console.log('Hola')
}

console.log(persona);
persona[saludar]();
console.log(persona[nombre]);

/* Recorrer las propiedades de un objeto */

for (let propiedades in persona) {
    console.log(propiedades);
    console.log(persona[propiedades], '\n');
}

/* Listar los atributos privados Symbol */
console.log(`Mostrando las propiedades privadas en un symbol:`, Object.getOwnPropertySymbols(persona));




