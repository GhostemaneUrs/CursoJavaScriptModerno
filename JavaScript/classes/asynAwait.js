/* Asyn y await en JavaScript */

const elevarAlCuadrado = (numero) => {
    return new Promise((resolve, reject) => {
        if (!numero) {
            reject(`Error: ${numero} es un valor vacio, escriba un numero, por favor`);
        } else if (typeof numero !== 'number') {
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

const elevarAlCuadradoAsincrona = async () => {
    let objeto = [];
    try {
        console.log('Inicio async function')
        objeto = await elevarAlCuadrado(1);
        console.log(`Async function: ${objeto.numero}, ${objeto.resultado}`)
        objeto = await elevarAlCuadrado(2);
        console.log(`Async function: ${objeto.numero}, ${objeto.resultado}`)
        objeto = await elevarAlCuadrado(3);
        console.log(`Async function: ${objeto.numero}, ${objeto.resultado}`)
        objeto = await elevarAlCuadrado(4);
        console.log(`Async function: ${objeto.numero}, ${objeto.resultado}`)
        objeto = await elevarAlCuadrado(5);
        console.log(`Async function: ${objeto.numero}, ${objeto.resultado}`)

        console.log('Fin async function')
    } catch (error) {
        console.log(error);
    }
}

elevarAlCuadradoAsincrona();