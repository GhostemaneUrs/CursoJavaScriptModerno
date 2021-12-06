/* Manejo de errores en JavaScript */

const operaciones = function (numeroUno, numeroDos, caso) {
    try {
        if (isNaN(numeroUno && numeroDos)) {
            throw new Error("El caracter introducido no es un numero")
        } else if (caso === "suma") {
            resultado = numeroUno + numeroDos
            console.log(`La suma de los numeros ${numeroUno} y ${numeroDos} es: ${resultado}`)
        } else if (caso === "resta") {
            resultado = numeroUno - numeroDos
            console.log(`La resta de los numeros ${numeroUno} y ${numeroDos} es: ${resultado}`)
        } else if (caso === "multiplicacion") {
            resultado = numeroUno * numeroDos
            console.log(`La multiplicacion de los numeros ${numeroUno} y ${numeroDos} es: ${resultado}`)
        } else if (caso === "division") {
            resultado = numeroUno / numeroDos
            console.log(`La multiplicacion de los numeros ${numeroUno} y ${numeroDos} es: ${resultado}`)
        }
    } catch (error) {
        console.log(`${error}`)
    }
}

operaciones(2,2,"suma")