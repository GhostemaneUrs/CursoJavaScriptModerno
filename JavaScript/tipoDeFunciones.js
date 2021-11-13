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

/* funciones en los objetos */

const reproductor = {
    crearPlaylist: function (nombrePlaylist, ...canciones) {
        console.log(`La playlist ${nombrePlaylist} contiene las siguientes canciones: `);
        for (let i = 0; i < canciones.length; i++) {
            console.log(canciones[i]);
        }
    },

    reproducir: function (nombrePlaylist) {
        console.log(`Reproduciendo playlist ${nombrePlaylist}`);
    },

    pausar: function (nombrePlaylist) {
        console.log(`Pausando playlist ${nombrePlaylist}`);
    },

    borrar: function (nombrePlaylist) {
        console.log(`Borrando playlist ${nombrePlaylist}`);
    }
}

reproductor.crearPlaylist('Bab Bunny', 'Lo siento bb', 'Nos escapamos', 'Si estuvieramos juntos');
reproductor.reproducir('Bab Bunny');
