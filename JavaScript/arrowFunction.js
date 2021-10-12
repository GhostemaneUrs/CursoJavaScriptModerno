/* Aprendiendo arrow function */

const suma = (numeroUno, numeroDos, ...numeroTres) => {
    let resultado = numeroUno + numeroDos
    numeroTres.forEach(function (contador) {
        resultado += contador
    })
    console.log(`El resultado de la suma es: ${resultado}`)
}

const saludar = nombre => console.log(`Hola ${nombre}`) //Esto es una arrow function implicita

const numeros = [1, 2, 3, 4, 5]
numeros.forEach((elemento, index) => console.log(`El numero ${elemento} esta en la posicion ${index}`))

const perro = {
    nombre: 'Zeus',
    ladrar: () => {
        console.log(this)
    }
}
