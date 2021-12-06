/* Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma */


const ordenar = (...numeros) => {
    let ordenadosAscendete = []
    let ordenadosDescendete = []
    if (!numeros) {
        console.log('Ingresa algun valor')
    } else if (numeros.length > 0) {
        for (let index = 0; index < numeros.length; index++) {
            ordenadosAscendete.push(numeros[index])
            ordenadosAscendete.sort((unNumero, otroNumero) => unNumero - otroNumero)
            ordenadosDescendete.push(numeros[index])
            ordenadosDescendete.sort((unNumero, otroNumero) => otroNumero - unNumero)
        }
        console.log(`Los numeros ingresados son: [${numeros}]`)
        console.log(`Los numeros ordenados ascendentemente son: [${ordenadosAscendete}]`)
        console.log(`Los numeros ordenados descendentemente son: [${ordenadosDescendete}]`)
    }
}

ordenar(9, 8, 7, 6, 5, 4, 3, 2, 1)


/* Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true] */

const eliminarRepetidos = (...valores) => {
    let sinRepetir = []
    if (!valores) {
        console.log('Ingrese un valor')
    } else if (valores.length > 0) {
        for (let index = 0; index < valores.length; index++) {
            const elemento = valores[index];
            if (!sinRepetir.includes(valores[index])) {
                sinRepetir.push(elemento)
            }
        }
        console.log(`Los valores que ingreso fueron: [${valores}]`)
        console.log(`Los valores sin repetir son: [${sinRepetir}]`)
    }
}

eliminarRepetidos("x", 10, "x", 2, "10", 10, true, true)


/* Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const promedioArray = (...numeros) => {
    let promedio = []
    let suma = 0
    if (!numeros) {
        console.log('Ingrese un valor')
    } else if (numeros.length > 0) {
        for (let index = 0; index < numeros.length; index++) {
            suma += numeros[index];
            promedio = (suma / numeros.length);
        }
        console.log(`Los numeros que ingreso fueron: [${numeros}]`)
        console.log(`El promedio de los numeros es: [${promedio}]`)
    }
}

promedioArray(9, 8, 7, 6, 5, 4, 3, 2, 1, 0)