/* Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const vocalesConsonantes = function (cadena) {
    if (!cadena) {
        console.log('Ingrese algo por favor')
    } else if (typeof cadena !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof cadena === 'string') {
        let vocales = /[aAeEiIoOuU]/gi
        let consonantes = /[bBcCdDfFgGhHjJkKlLmMnNñÑpPqQrRsStTvVwWxXyYzZ]/gi
        totalVocales = cadena.match(vocales).length
        totalConsonantes = cadena.match(consonantes).length
        console.log(`El numero de vocales de la cadena es: ${totalVocales}, el numero de consonantes de la cadena es: ${totalConsonantes}`)
    }
}

vocalesConsonantes('Hola Mundo')

/* Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validarNombre = function (nombre) {
    if (!nombre) {
        console.log('Ingrese algo por favor')
    } else if (typeof nombre !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof nombre === 'string') {
        let expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let comprobar = expRegNombre.test(nombre);
        if (comprobar === false) {
            console.log('El nombre no es valido, solo se permite letras y espacios')
        } else if (comprobar === true) {
            console.log('El nombre es valido')
        }
    }
}

validarNombre('Jonathan MirCha')


/* Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarCorreo = function (correo) {
    if (!correo) {
        console.log('Ingrese algo por favor')
    } else if (typeof correo !== 'string') {
        console.log('Solo se permiten valores tipo string')
    } else if (typeof correo === 'string') {
        let expRegCorreo = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
        let comprobar = expRegCorreo.test(correo);
        if (comprobar === false) {
            console.log('El correo no es valido')
        } else if (comprobar === true) {
            console.log('El correo es valido')
        }
    }
}

validarCorreo('JaramilloG1999@outlook.com')