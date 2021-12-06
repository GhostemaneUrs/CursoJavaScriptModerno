/* Metodos string en JavaScript */
const producto = 'Monitor 20 pulgadas';

// Metodo length
console.log(producto.length);

// Metodo replace
console.log(producto.replace('Monitor', 'Monitor LG'));

// Metodo splice
console.log(producto.split(0, 10));
console.log(producto.split(8));
console.log(producto.split(2, 1));

// Metodo alternativo a splice
console.log(producto.substr(0, 10));

const persona = 'Andres'
console.log(persona.substr(0, 1));
console.log(persona.charAt(0)); // Hace lo mismo que substr

//Metodo repeat (repetir una cadena)
const texto = ' en Promoción'.repeat(2.4);
console.log(`${producto} ${texto}!!`)

//Metodo split
const actividad = 'Estoy aprendiendo JavaScript Moderno'
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar'
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo JavaScript moderno #JSModernoConJuan'
console.log(tweet.split('#'));

//Metodo touppercase
const productoLg = 'Monitor LG'
console.log(productoLg.toUpperCase()); // CAMBIA TODO A MAYUSCULAS
console.log(productoLg.toLowerCase()); // CAMBIA TODO A MINUSCULAS

