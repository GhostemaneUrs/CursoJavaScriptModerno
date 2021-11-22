/* Iterables en JavaScript */
/* Es el mecanismo que esta recorriendo un elemento iterable,
metodos for, array.from, destructuracion, spreate operator, promesas */
/* Estos son tipos de datos iterables */
const iterable = [1, 2, 3, 4, 5];
const iterador = iterable[Symbol.iterator]();
const iterableDos = new Set([1, 2, 3, 4, 5]);
const iterableTres = new Map([
    ['nombre', 'Andres']
    ['apellido', 'Jaramillo']
    ['edad', 22]
]);
console.log(`Nuestro array es: [${iterable}]`);
/* Siempre devuelve un objeto, el primer valor del objeto retorna el valor del array, y
el segundo es un estado para saber si tiene mas objetos o no  */
console.log(`Nuestro iterador es: ${iterador.next()}`); /* Recorriendo de manera manual */
/* Recorrerlo de la manera efectiva */
let next = iterador.next();
for (let i = 0; i < iterable.length; i++) {
    console.log(`El valor es: ${next.value}`);
    next = iterador.next();
    if (next.value === undefined) {
        console.log(`No hay mas valores`);
    }
}


