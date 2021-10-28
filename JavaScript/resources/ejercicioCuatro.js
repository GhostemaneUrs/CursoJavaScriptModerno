/* Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const verificarPrimos = function (numero) {
    if (isNaN(numero)) {
        console.log('No se permite valores vacios')
    } else if (typeof numero !== 'number') {
        console.log('Solo se permite valores tipo entero')
    } else if (typeof numero === 'number') {
        if (numero === 0 || numero === 1 || numero === 4) {
            console.log('No es primo')
        }
        for (let index = 2; index < numero / 2; index++) {
            if (numero % index === 0) {
                return console.log('No es primo')
            }
        }
        console.log('Si es primo')
    }
}

verificarPrimos(7)