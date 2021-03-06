/* Aprendiendo prototipos en JavaScript */

/* Programacion orientada a objetos
Clases => Modelo a seguir
Objetos => Es una instancia de una clase
Atributos => Es una caracteristica o propiedad del objeto (Son variables dentro de un objeto)
Metodos => Son las acciones que un objeto puede realizar
*/

/* Funcion constructora */

class Persona {
    constructor(nombreCompleto, genero, edad) {
        /* Atributos */
        this.nombreCompleto = nombreCompleto;
        this.genero = genero;
        this.edad = edad;
    }
    /* Metodos agregados al prototipo */
    saludar() {
        console.log(`${this.nombreCompleto} esta diciendo: Hola, ¿como estas?`);
    }
    comer() {
        console.log(`La persona ${this.nombreCompleto} esta comiendo`);
    }
}



const persona = new Persona("Andres Jaramillo ", "Masculino", 22);
const personaDos = new Persona("Karina Miranda", "Masculino", 21);
console.log(persona)
console.log(personaDos)