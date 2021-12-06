/* Generadores en JavaScript */
function* generador() {
    yield 'Hola';
    yield 'Hola 2';
    yield 'Hola 3';
    yield 'Hola 4';
}

let iterador = generador();
for (let i of iterador) {
    console.log(`El valor es: ${i}`);
}

/* Guardar valores en un arreglo */
const guardaValores = [...generador()];
console.log(guardaValores);
function cuadrado(numero) {
    setTimeout(() => {
        let resultado = numero * numero
        console.log(`El numero es: ${numero}, el resultado elevado es: ${resultado}`);
    }, Math.random() * 1000);
}
function* generadorCuadrado() {
    console.log('Inicia el generador')
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log('Se termino el generador')
}
let resultado = generadorCuadrado();
for (let i of resultado) {
    console.log(i);
}



