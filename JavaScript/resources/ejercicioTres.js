/* Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numeroAleatorio = (numeroMaximo, numeroMinimo) => {
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


const capicua = (numero) => {
    if (isNaN(numero)) {
        console.log('El numero no puede ir vacio')
    } else if (typeof numero !== 'number') {
        console.log('Solo se permite valores tipo entero')
    } else if (typeof numero === 'number') {
        let numeroTexto = numero.toString()
        let numeroTotal = ''
        for (let index = 0; index < numeroTexto.length; index++) {
            const element = numeroTexto[index];
            numeroTotal = element + numeroTotal
        }
        if (numeroTotal === numeroTexto) {
            console.log(`El numero ${numero} es una capicúa`)
        } else {
            console.log(`El numero ${numero} no es una capicúa`)
        }
    }
}

capicua(2002)


/* Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero) => {
    if (isNaN(numero)) {
        console.log('El numero no puede ir vacio')
    } else if (typeof numero !== 'number') {
        console.log('Solo se permite valores tipo entero')
    } else if (typeof numero === 'number') {
        let contador = 1
        for (let index = 1; index <= numero; index++) {
            contador = contador * index
        }
        console.log(`El factorial del numero ${numero} es: ${contador}`)
    }
}

factorial(5)
