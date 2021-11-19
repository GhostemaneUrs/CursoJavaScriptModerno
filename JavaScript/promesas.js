/* Promesas en JavaScript */

const elevarAlCuadrado = (numero) => {
    if (!numero) {
        reject(`Error: ${numero} es un valor vacio, escriba un numero, por favor`);
    } return new Promise((resolve, reject) => {
        if (typeof numero !== 'number') {
            reject(`Error: el valor ingresado "${numero}" no es un numero`);
        } else if (typeof numero === 'number') {
            setTimeout(() => {
                resolve({
                    numero, resultado: numero * numero
                });
            }, 0 | Math.random() * 100)
        }
    });
}

elevarAlCuadrado(1).then((obj) => {
    console.log(`Numero: ${obj.numero}, su resultado elevado es: ${obj.resultado}`);
    return elevarAlCuadrado(2);
}).then((obj) => {
    console.log(`Numero: ${obj.numero}, su resultado elevado es: ${obj.resultado}`);
    return elevarAlCuadrado(3);
}).then((obj) => {
    console.log(`Numero: ${obj.numero}, su resultado elevado es: ${obj.resultado}`);
    return elevarAlCuadrado(4);
}).then((obj) => {
    console.log(`Numero: ${obj.numero}, su resultado elevado es: ${obj.resultado}`);
    return elevarAlCuadrado();
}).then((obj) => {
    console.log(`Numero: ${obj.numero}, su resultado elevado es: ${obj.resultado}`);
}).catch(error => console.error(error));