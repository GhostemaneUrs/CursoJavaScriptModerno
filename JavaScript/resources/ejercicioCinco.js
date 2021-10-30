/*  Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

const binarioDecimal = function (numero, base) {
    if (!numero || isNaN(numero) || typeof numero !== 'number') {
        console.log("El número introducido no es válido");
    } else if (Math.sign(numero) === -1) {
        console.log('Solo se permiten valores positivos')
    } else if (!Number.isInteger(numero)) {
        console.log(`El número tiene que ser entero. Tomo como número ${Math.round(numero)}`);
        numero = Math.round(numero);
    } else if (!base || isNaN(base)) {
        console.log("La base introducida no es válida")
    } else if (!base || base === 2) {
        console.log(`El número ${numero} en base decimal es ${Number.parseInt(numero, 2)}`);
    } else if (base === 10) {
        console.log(`El número ${numero} en base binaria es ${numero.toString(2)}`);
    } else {
        console.log("La base solo puede ser 2 o 10")
    }

}

binarioDecimal(100, 2)

/* Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

const descuento = function (numero, descuentos) {
    if (!numero || isNaN(numero) || typeof numero !== 'number' && !descuentos
        || isNaN(descuentos) || typeof descuentos !== 'number') {
        console.log("El número introducido no es válido");
    } else if (Math.sign(numero) === -1 && Math.sign(descuentos) === -1) {
        console.log('Solo se permiten valores positivos')
    } else if (typeof numero === 'number' && typeof descuentos === 'number') {
        totalDescuesto = 1 - (descuentos / 100)
        total = numero * totalDescuesto
        console.log(`El descuento total es: ${total}`)
    }
}

descuento(1000, 20)


/* Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

const añosPasados = function (fecha) {
    if (!fecha) {
        console.log('No se permiten valores vacios')
    } else {
        let fechaIngresa = Date.parse(fecha);
        let fechaActual = Date.now()
        if (isNaN(fechaIngresa)) {
            console.log('La fecha introducida no es valida')
        }
        console.log(`Han pasado: ${Math.floor((fechaActual - fechaIngresa) / (365 * 24 * 60 * 60 * 1000))} años`)
    }
}

añosPasados(new Date(1999, 6, 18))



