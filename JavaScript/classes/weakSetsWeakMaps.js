/* WeakSets & WeakMaps en JavaScript */
/* Es el hermano menor de los sets y maps, maneja datos debiles */

/* Las llaves deben ser de tipo objeto */
/* No se puede utilizar el metodo clear, no se puede usar el metodo size */

const ws = new WeakSet(); /* Solamente se puede agregar valores de uno en en uno */
let primerValor = { 'nombre': 'Andres' };
let segundoValor = { 'apellido': 'Jaramillo' };
let tercerValor = { 'edad': 22 };
ws.add(primerValor);
ws.add(segundoValor);
ws.add(tercerValor);
console.log('Comprobando si tiene valor de ws:', ws.has(primerValor)); /* Retorna true */
console.log('Comprobando si tiene valor de ws:', ws.has(tercerValor)); /* Retorna false porque aun no se le asigna el valor*/

/* setInterval(() => {
    console.log(ws);
}, 1000);

setTimeout(() => {
    primerValor = null;
    segundoValor = null;
    tercerValor = null;
}, 5000); */

const wm = new WeakMap();
let primerValorMap = []
let segundoValorMap = []
let tercerValorMap = []
wm.set(primerValorMap, 'Andres');
wm.set(segundoValorMap, 'Jaramillo');
wm.set(tercerValorMap, 22);
console.log('Comprobando si tiene valor de wm:', wm.has(primerValorMap)); /* Retorna true */
console.log('Comprobando si tiene valor de wm:', wm.has(tercerValorMap)); /* Retorna false porque aun no se le asigna el valor  */
/* Obtener el valor de wm */
console.log('Obtener el valor de wm: ', wm.get(primerValorMap)); /* Retorna Andres */
/* Eliminar la propiedad del wm */
console.log('Se a eliminado el valor: ', wm.delete(primerValorMap));
console.log(wm)

