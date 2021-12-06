/* Asincronia y el event lopp en JavaScript */

/* Codigo sincrono bloqueante */

(() => {
    console.log('Codigo Sincrono')
    console.log('Inicio del programa')
    const dos = () => {
        console.log('Dos')
    }
    const uno = () => {
        console.log('Uno')
        dos()
        console.log('Tres')
    }
    uno()
    console.log('Fin del programa \n')
})();

/* Codigo asincrono no bloqueante */

(() => {
    console.log('Codigo Asincrono')
    console.log('Inicio del programa')
    const dos = () => {
        setTimeout(() => {
            console.log('Dos')
        }, 1000)
    }
    const uno = () => {
        setTimeout(() => {
            console.log('Uno')
        }, 0)
        dos()
        console.log('Tres')
    }
    uno()
    console.log('Fin del programa')
})();

