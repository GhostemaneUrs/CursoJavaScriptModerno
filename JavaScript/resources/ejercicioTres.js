/* Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numeroAleatorio = function (numeroMaximo, numeroMinimo) {
    if (!numeroMaximo && !numeroMinimo) {
        console.log('Los valores no pueden ser vacios')
    } else if (typeof numeroMaximo !== 'number' & typeof numeroMinimo !== 'number') {
        console.log('No se permite valores tipo string')
    } else if (typeof numeroMaximo === 'number' & typeof numeroMinimo === 'number') {
        let random = Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo)
        console.log(`El numero random es: ${random}`)
    }
}

numeroAleatorio(501, 601)


/* Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

