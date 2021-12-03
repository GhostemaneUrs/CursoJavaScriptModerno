/* Call, apply, bind en JavaScript */

this.lugar = 'Contexto Global';

function saludar(saludo, persona) {
    console.log(`${saludo} ${persona} desde el: ${this.lugar}`);
}

saludar('Hola', 'Andres');

const objeto = {
    lugar: 'Contexto Objeto',
}

saludar.call(objeto, 'Hola', 'Andres'); /* Sirve para pasarle una funcion a un objeto */
saludar.apply(objeto, ['Hola', 'Andres']); /* Sirve para pasarle una funcion a un objeto, apply solo recibe un objeto */


const persona = {
    nombre: 'Andres',
    saludar: function () {
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar('Hola');

this.nombre = 'Windows'
const otraPersona = {
    saludar: persona.saludar.bind(this) /* Enlazo el contexto de quien quiera, en este caso de persona */
}

otraPersona.saludar() /* Muestra undefined porque no tiene propiedad nombre */