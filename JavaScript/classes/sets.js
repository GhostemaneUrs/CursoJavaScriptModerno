/* Aprendiendo sets en JavaScript  */
/* Es un objeto que solamente permite valores unicos primitivos */

const set = new Set([1, 2, 3, 3, 4, 5, true, true, false, 'hola', 'hola', 'Hola']);
console.log(set);
/* Saber el tamaño de un set */
console.log(`El tamaño del set es: ${set.size}`);

/* Crear un set segunda forma */
const setDos = new Set();
setDos.add(1);
setDos.add(2);
setDos.add(3);
setDos.add(3);
setDos.add(4);
setDos.add(5);
setDos.add(true);
setDos.add(true);
setDos.add(false);
setDos.add('hola');
setDos.add('hola');
setDos.add('Hola');

console.log(setDos);
console.log(`El tamaño del setDos es: ${set.size}`);

/* Recorrer un set */

console.log('\n');

for (item of set) {
    console.log('Recorriendo los valores del set', item);
}

console.log('\n');

setDos.forEach(item => {
    console.log('Recorriendo los valores del setDos', item);
})

/* Tipo de dato iterable */
let arrayFrom = Array.from(set)
console.log(arrayFrom[0]); /* Convertilo a un arreglo con el metodo from */

/* Eliminar valores con un set */

set.delete('Hola')
console.log(set);

/* Metodo has para comprobar si ese valor existe en mi set */

set.has('hola') ? console.log('Si existe') : console.log('No existe');

/* Metodo para limpiar un set */

setDos.clear();
console.log(setDos);


