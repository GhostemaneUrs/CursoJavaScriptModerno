/* Destructuracion en JavaScript */

const persona = {
    primerNombre: "Andres",
    primerApellido: "Jaramillo",
    edad: 22,
    hobbies: ["Aprender React", "Aprender JavaScript", "Jugar VideoJuegos"],
    estado: ["Soltero", "Casado"],
    contacto: {
        email: "JaramilloG1999@outlook.com",
        movil: "3043512931"
    }
}

const {primerNombre, primerApellido, edad} = persona
