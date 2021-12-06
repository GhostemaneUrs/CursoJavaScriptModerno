/* Maps en JavaScript */
/* Es una coleccion de datos primitivos */

const mapa = new Map();
mapa.set('nombre', 'Andres');
mapa.set('apellido', 'Jaramillo');
mapa.set('edad', 22);
console.log(mapa); /* Es un objeto iterrador, tiene carecteristicas de arreglo aunque no lo sea */
console.log(`El tamaño del mapa es: ${mapa.size}`)
mapa.has('nombre') ? console.log(`El mapa si tiene la propiedad`) : console.log('El mapa no tiene la propiedad');
mapa.has('correo') ? console.log(`El mapa si tiene la propiedad`) : console.log('El mapa no tiene la propiedad');
/* Para obtener el valor de un mapa */
console.log(`El valor que usted obtiene es: ${mapa.get('nombre')}`);
/* Para modificar el valor de un mapa */
mapa.set('nombre', 'Andres Jaramillo');
console.log(`El valor que usted obtiene es: ${mapa.get('nombre')}`);
/* Para eliminar propiedades de un mapa */
mapa.delete('apellido');
console.log('El mapa queda con los valores:', mapa)
/* Para agregar valores nuevos */
mapa.set(19, 'diecinueve')
mapa.set(false, 'false')
mapa.set(false, 'false')
/* Para recorrer un mapa los haces con llave valor  */
contador = 1;
for (let [key, value] of mapa) {
    console.log('Recorrido propiedad', contador++);
    console.log(`La llave del mapa es: ${key}, su valor es: ${value}`);
}
/* Tambien se puede crear un map de la siguiente forma */
const segundoMapa = new Map([
    ['Nombre', 'Felipe'],
    ['Apellido', 'Gonzalez'],
    ['Edad', 22],
]);

/* Aplicar destructuracion */
const llavesMapaDos = [...segundoMapa.keys()]; /* Obtener las llaves de un mapa */
const valoresMapaDos = [...segundoMapa.values()]; /* Obtener los valores de un mapa */
console.log(`Los llaves del segundo mapa son: [${llavesMapaDos}]`);
console.log(`Los valores del segundo mapa son: [${valoresMapaDos}] `);