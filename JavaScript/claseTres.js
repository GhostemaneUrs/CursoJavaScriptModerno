/* Scope en JavaScript */

/* Tipos de scope */

/* Scope Global */

var primerNombre = "Andres"
var edad = 22

/* Scope local */

let leerPersona = function () {

    primerApellido = "Jaramillo"
    edad = 22
    hobbies = "Aprender programacion"

    console.log(`Hola ${primerNombre} ${primerApellido}, usted tiene la edad ${edad}, y sus hobbies son: ${hobbies}`);
}
leerPersona();

/* Template String en JavaScript */
let persona = {
    primerNombre: "Andres",
    primerApellido: "Jaramillo",
    edad: 22,
    hobbies: "Aprender programacion"
}

let ul = `
<ul>
    <li>${persona.primerNombre}</li>
    <li>${persona.primerApellido}</li>
    <li>${persona.edad}</li>
    <li>${persona.hobbies}</li>
</ul>`

console.log(ul)

