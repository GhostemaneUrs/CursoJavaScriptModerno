/* Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const verificarPrimos = (numero) => {
    if (isNaN(numero)) {
        console.log('No se permite valores vacios')
    } else if (typeof numero !== 'number') {
        console.log('Solo se permite valores tipo entero')
    } else if (typeof numero === 'number') {
        if (numero === 0 || numero === 1 || numero === 4) {
            console.log(`El numero ${numero} no es primo`)
        }
        for (let index = 2; index < numero / 2; index++) {
            if (numero % index === 0) {
                return console.log(`El numero ${numero} no es primo`)
            }
        }
        console.log(`El numero ${numero} si es primo`)
    }
}

verificarPrimos(7)


/* Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const verificarParImpara = (numero) => {
    if (isNaN(numero)) {
        console.log('No se permite valores vacios')
    } else if (typeof numero !== 'number') {
        console.log('Solo se permite valores tipo entero')
    } else if (typeof numero === 'number') {
        if (numero % 2 === 0) {
            console.log(`El numero ${numero} si es par`)
        } else {
            console.log(`El numero ${numero} es impar`)
        }
    }
}

verificarParImpara(3)

/* Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const gradosCelsiusFahrenheit = (numero, grados) => {
    if (isNaN(numero) || !grados) {
        console.log('No se permiten valores vacios')
    } else if (typeof numero !== 'number') {
        console.log('Solo se permite valores tipo entero')
    } else if (typeof grados !== 'string') {
        console.log('Solo se permite valores tipo string')
    } else if (typeof numero === 'number' && typeof grados === 'string') {
        if (grados === 'F' || grados === 'f') {
            let fahrenheit = (((numero * 9) / 5) + 32).toFixed(2)
            console.log(`El numero ${numero} en grados fahrenheit es: ${fahrenheit}°F`)
        } else if (grados === 'C' || grados === 'c') {
            let celsius = ((numero - 32) * 5 / 9).toFixed(2)
            console.log(`El numero ${numero} en grados celsius es: ${celsius}°C`)
        }
    }
}

gradosCelsiusFahrenheit(9, 'c')