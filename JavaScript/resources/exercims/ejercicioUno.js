/* Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

const contarCaracteres = (cadena) => {
    if (!cadena) {
        console.log('La cadena no puede ir vacia')
    } else if (typeof cadena !== 'string') {
        console.log('El valor que ingreso no es de tipo cadena, por favor escriba uno')
    } else if (typeof cadena === 'string' && cadena.length > 0) {
        console.log(`La cadena "${cadena}", tiene una cantidad de caracteres: ${cadena.length}`)
    }
}

contarCaracteres()

/* Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola" */

const recortarCaracteres = (cadena, cantidad) => {
    if (isNaN(cantidad)) {
        console.log('La cantidad no puede ir vacia')
    } else if (!cadena) {
        console.log('La cadena no puede ir vacia')
    } else if (typeof cantidad !== 'number') {
        console.log('Por favor escriba un numero valido')
    } else if (typeof cadena !== 'string') {
        console.log('Por favor la cadena debe ser de tipo string')
    } else if (typeof cadena === 'string') {
        let cadenaRecortda = cadena.slice(0, cantidad)
        console.log(`La cadena "${cadena}" queda de la siguiente manera: ${cadenaRecortda}`)
    }
}

recortarCaracteres('Hola mundo', 4)


/* Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

const almacenarCaracteresArray = (cadena) => {
    if (!cadena) {
        console.log('La cadena no puede ir vacia')
    } else if (typeof cadena !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof cadena === 'string') {
        let almacenar = cadena.split([''])
        return almacenar
    }
}

console.log(almacenarCaracteresArray('Hola'))


/* Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repetirCaracteres = (cadena, cantidad) => {
    let repetirCadena = ''
    if (isNaN(cantidad)) {
        console.log('La cantidad no puede ir vacia')
    } else if (!cadena) {
        console.log('La cadena no puede ir vacia')
    } else if (typeof cadena !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof cadena === 'string') {
        for (let index = 0; index < cantidad; index++) {
            repetirCadena += cadena + ' '
        }
        console.log(`La cadena ${cadena} queda asi: ${repetirCadena}`)
    }
}

repetirCaracteres('Hola', 3)
