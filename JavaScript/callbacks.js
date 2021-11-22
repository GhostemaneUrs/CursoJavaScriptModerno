/* Podemos crear funciones automa llamadas, es el primer mecanismo para poder trabajar con la sincronia */
/* Teoria de la recursividad */
const elevarAlCuadrado = (numero, callBack) => {
    if (!numero && !callBack) {
        console.log('No se permiten valores vacios')
    } else if (typeof numero !== 'number') {
        console.log('El numero debe ser un numero')
    } else if (typeof numero === 'number') {
        setTimeout(() => {
            callBack(numero, numero * numero)
        }, 0 | Math.random() * 100)
    }
}

/* Se conoce como la piramide del infierno */
elevarAlCuadrado(0, (numero, resultado) => {
    console.log('Se inicio el callback')
    console.log(`Numero: ${numero}, su resultado elevado es: ${resultado}`)
    elevarAlCuadrado(1, (numero, resultado) => {
        console.log(`Numero: ${numero}, su resultado elevado es: ${resultado}`)
        elevarAlCuadrado(2, (numero, resultado) => {
            console.log(`Numero: ${numero}, su resultado elevado es: ${resultado}`)
            elevarAlCuadrado(3, (numero, resultado) => {
                console.log(`Numero: ${numero}, su resultado elevado es: ${resultado}`)
                elevarAlCuadrado(4, (numero, resultado) => {
                    console.log(`Numero: ${numero}, su resultado elevado es: ${resultado}`)
                    elevarAlCuadrado(5, (numero, resultado) => {
                        console.log(`Numero: ${numero}, su resultado elevado es: ${resultado}`)
                    })
                })
            })
        })
    })
})