/* Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

const elevarAlCuadrado = (...numeros) => {
    let numerosArreglo = []
    if (!numeros) {
        console.log('Escriba algo por favor')
    } else if (numeros.length > 0) {
        for (let index = 0; index < numeros.length; index++) {
            numerosArreglo.push(numeros[index] * numeros[index]);
        }
        console.log(`Los numeros ingresados fueron [${numeros}], los numeros al cuadrado son: [${numerosArreglo}]`)
    }
}

elevarAlCuadrado(1, 4, 5)


/* Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */


const compararArray = (...numeros) => {
    let numerosArregloMayores = []
    let numerosArregloMenores = []
    if (!numeros) {
        console.log('Escriba algo por favor')
    } else if (numeros.length > 0) {
        for (let index = 0; index < numeros.length; index++) {
            if (numerosArregloMayores < numeros[index]) {
                numerosArregloMayores = numeros[index]
            } else if (numerosArregloMenores > numeros[index]) {
                numerosArregloMenores = numeros[index]
            }
        }
        console.log(`Los numeros ingresados son: [${numeros}]`)
        console.log(`Los numeros mayores ingresados son: [${numerosArregloMayores}]`)
        console.log(`Los numeros menores ingresados son: [${numerosArregloMenores}]`)
    }
}

compararArray(1, 4, 5, 99, -60)


/*  Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]. */

const numerosParesImpares = (...numeros) => {
    let numerosArregloPares = []
    let numerosArregloImpares = []
    if (!numeros) {
        console.log('Escriba algo por favor')
    } else if (numeros.length > 0) {
        for (let index = 0; index < numeros.length; index++) {
            if (Math.sign(index) == -1) {
                console.log('Solo se permiten numeros positivos')
            } else if (!(numeros[index] % 1 === 0)) {
                console.log('No se permiten numeros decimales')
            } else if (numeros[index] % 2 === 0) {
                numerosArregloPares.push(numeros[index])
            } else if (numeros[index] % 2 === 1) {
                numerosArregloImpares.push(numeros[index])
            }
        }
        console.log(`Los numeros ingresados son: [${numeros}]`)
        console.log(`Los numeros pares ingresados son: [${numerosArregloPares}]`)
        console.log(`Los numeros impares ingresados son: [${numerosArregloImpares}]`)
    }
}

numerosParesImpares(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
