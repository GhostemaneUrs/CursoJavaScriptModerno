/* Parametros REST & Operador Spread */
/* Sirve para frameworks reactivas, son una forma de virtualmente
ir agregando parametros infinitos dentro de una funcion o una variable */

function suma(numeroUno, numeroDos, ...numeroTres) {
    let resultado = numeroUno + numeroDos
    numeroTres.forEach(function(contador){
        resultado += contador
    })
    console.log(`El resultado de la suma es: ${resultado}`)
}


/* Cualquier tercer valor colocado es dinamico */

/* Spread Operator */

const numeros = [1,2,3,4,5]
const numerosDos = [6,7,8,9,10]
const union = [...numeros,...numerosDos]

console.log(`Este es la union de los dos array: ${union}`)