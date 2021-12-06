/* Objetos en JavaScript */

const persona = {
    primerNombre: "Andres",
    primerApellido: "Jaramillo",
    edad: 22,
    hobbies: ["Aprender React", "Aprender JavaScript", "Jugar VideoJuegos"],
    estado: ["Soltero", "Casado"],
    contacto: {
        email: "JaramilloG1999@outlook.com",
        movil: "3043512931"
    },
    saludar: function(nombre) {
        console.log(`Hola ${nombre}, mucho gusto me llamo ${this.primerNombre}`)
    }
}

console.log(`Tu nombre es ${persona.primerNombre}, tu pasatiempo es: ${persona.hobbies[1]}`) //Acceder a las propiedades
persona.saludar("Mariela") //Ejecutar funciones en un objeto
console.log(Object.keys(persona)) //Ver todas las key de mi objeto
console.log(Object.values(persona)) //Ver todos los valores de mi objeto
console.log(persona.hasOwnProperty("primerNombre"))