/* Temporizadores en JavaScript para la programacion asincrona */

const temporizador = setTimeout(() => {
    console.log('Se ejecuta una sola vez');
}, 3000);

clearTimeout(temporizador); /* Sirve para ponerle fin a un timeOut */

/* El setInterval se ejecuta varias veces segun el tiempo que se le asigno */

const hora = setInterval(() => {
    console.log('La hora es:', new Date().toLocaleTimeString());
}, 1000);

clearInterval(hora); /* Sirve para ponerle fin a un intervalo */