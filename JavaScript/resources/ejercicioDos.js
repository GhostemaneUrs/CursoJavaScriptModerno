/* Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

const invertirCadena = (cadena) => {
    if (!cadena) {
        console.log('La cadena no puede ir vacia')
    } else if (typeof cadena !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof cadena === 'string' && cadena.length > 0) {
        console.log(`La cadena "${cadena}" revertida queda asi: ${cadena.split('').reverse().join('')}`)
    }
}

invertirCadena('Hola')

/* Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

const buscarPalabraRepetida = (texto, palabra) => {
    if (!texto && !palabra) {
        console.log('Los valores no puede ir vacios')
    } else if (typeof texto !== 'string' && typeof palabra !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof texto === 'string' && texto.length > 0 && typeof palabra === 'string' && palabra.length > 0) {
        let contador = 0;
        let miniscula = palabra.charAt(0).toLowerCase() + palabra.slice(1);
        let mayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
        let signos = /[.,\/#!$%¿?\^&\*;:{}=\-_`~()”“"…]/g
        let palabraRepetida = palabra.replace(signos, "").split(" ").filter(e => e === mayuscula || e === miniscula);
        for (let index = 0; index < texto.length; index++) {
            if (palabraRepetida[index] === palabra) {
                contador++;
            }
        }
        console.log(`La palabra ${palabra} se encuentra ${contador} veces en el texto`)
    }
}

buscarPalabraRepetida('hola mundo adios mundo', 'adiós')


/* Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const palindromo = (cadena) => {
    if (!cadena) {
        console.log('El valor no puede ser vacio')
    } else if (typeof cadena !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof cadena === 'string') {
        let palabraPalindromo = cadena.replace(/[\W_]/g, '').toLowerCase();
        let invertida = palabraPalindromo.split('').reverse().join('')
        console.log(palabraPalindromo === invertida ? `La cadena ${cadena} es un palíndromo` : `La cadena ${cadena} no es un palíndromo`)
    }
}

palindromo('Ali tomo tila')

/* Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const eliminarPatron = (cadena, patron) => {
    if (!cadena && !patron) {
        console.log('El valor no puede ser vacio')
    } else if (typeof cadena !== 'string' && typeof patron !== 'string') {
        console.log('Solo se permite valores tipo string')
    } else if (typeof cadena === 'string' && typeof patron === 'string') {
        let expresion = new RegExp(patron, 'gi')
        let reemplazar = cadena.replace(expresion, '')
        console.log(`La cadena ${cadena} quedo con el patron: ${reemplazar}`)
    }
}

eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')