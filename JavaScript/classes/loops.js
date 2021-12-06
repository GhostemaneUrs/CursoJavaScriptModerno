/* Estructuras de control en JavaScript Loops */

/* Estas estructuras no se usan  */

let contador = 0;
while (contador < 10) {
    console.log("Ciclo While: " + contador)
    contador++
}

do {
    console.log("Ciclo Do While: " + contador)
    contador++
} while (contador < 10)

/* Estructura de control for  */

for (let contadorFor = 0; contadorFor < 10; contadorFor++) {
    console.log("Ciclo for: " + contadorFor)
}

/* Recorrer un array */

let numeros = [10, 50, 80, 20, 15, 90]
for (let i = 0; i < numeros.length; i++) {
    console.log("Numeros: " + numeros[i])
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Los numeros pares son: ${i}`)
    } else {
        console.log(`Los numeros impares son: ${i}`)
    }
}

/* For in especial para objeto */
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

for (const key in persona) {
    console.log(`Llave: ${key}, valor: ${persona[key]}`)
}

/* Una diferente forma de hacer un for */
for (const [key, value] of Object.entries(persona)) {
    console.log(`Llave: ${key}, valor: ${value}`)
}


/* For of especial para recorrer todo tipo de objeto */
let cadena = "Hola"
for (const elemento of cadena) {
    console.log(`Recorrer: ${elemento}`)
}