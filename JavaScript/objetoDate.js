/* Objeto date en JavaScript */

let fecha = new Date();
console.log(fecha) /* Mostrar toda la fecha completa */
console.log(`Numero del mes: ${fecha.getDate()}`) /* Mostrar el numero del mes */
console.log(`Numero del dia de la semana: ${fecha.getDay()}`) /* Mostrar el numero del dia de la semana */
console.log(`Numero del dia del mes: ${fecha.getMonth()}`) /* Mostrar el numero del mes */
console.log(`Numero del dia del año: ${fecha.getFullYear()}`) /* Mostrar el numero del año */
console.log(`¿Que hora es? ${fecha.getHours()}`) /* Mostrar la hora */
console.log(`¿Que minutos son? ${fecha.getMinutes()}`) /* Mostrar los minutos */
console.log(`¿Que segundos son? ${fecha.getSeconds()}`) /* Mostrar los segundos */
console.log(`¿Cual es la fecha local? ${fecha.toLocaleDateString()}`) /* Mostrar la fecha local */
console.log(`¿Cual es la hora local? ${fecha.toLocaleTimeString()}`) /* Mostrar la hora local */
console.log(`¿Saber la diferencia de la hora cero? ${fecha.getTimezoneOffset()}`) /* Mostrar la diferencia de la hora cero */
console.log(`¿Saber la fecha cero? ${fecha.getUTCDate()}`) /* Mostrar la fecha cero */
console.log(`¿Saber la hora cero? ${fecha.getUTCHours()}`) /* Mostrar la hora cero */
console.log(`¿Saber la hora cero? ${Date.now()}`) /* Mostrar la fecha cero */

let cumpleaños = new Date(1999, 5, 18)
console.log('Mi cumpleaños es: ' + cumpleaños)


