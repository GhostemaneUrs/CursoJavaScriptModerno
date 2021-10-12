/* Tipo de funciones en JavaScript */

/* Funciones declarativas */

function suma(numeroUno, numeroDos) {
    console.log(`La suma de los numeros ${numeroUno} y ${numeroDos} es: ` + (numeroUno + numeroDos));
}
suma(50, 60);

/* Funciones expresivas */

const resta = function (numeroUno, numeroDos) {
    console.log(`La resta de los numeros ${numeroUno} y ${numeroDos} es: ` + (numeroUno - numeroDos));
}
resta(20, 10);