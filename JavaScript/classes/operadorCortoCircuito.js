/* Operador corto circuito en JavaScript */

/* Corto circuito con or ==> cuando el valor de la izquierda en la izquierda
siempre pueda validar a true, es el valor que se cargara por defecto */

/* Corto circuito con and ==> cuando el valor de la izquierda en la izquierda
siempre pueda validar a false, es el valor que se cargara por defecto */

function saludarOr(nombreOr) {
    nombreOr = nombreOr || 'Desconocido'
    console.log(`Hola ${nombreOr}, ¿como estas?`)
}

saludarOr('Andres')
saludarOr()/* El valor muestra desconocido porque en este caso el valor de la izquierda es undefined y esto tiende a ser true porque
se le esta pasando un valor vacio, vacio = vacio es true, por eso se muestra desconocido */


function saludarAnd(nombreAnd) {
    nombreAnd = nombreAnd && 'Desconocido'
    console.log(`Hola ${nombreAnd}, ¿como estas?`)
}

saludarAnd('Andres') /* El valor muestra desconocido porque desconocido es un valor falso,
debido a que a la comparacion nombreAnd no es igual, por lo cual muestra desconido */
saludarAnd()

