/* Proxies en JavaScript */
/* Crea una copia del objeto original, sirve para hacer validaciones administradose en un manejador */

const persona = {
    nombre: 'Andres',
    apellido: 'Jaramillo',
    edad: 22
}
console.log(persona);

const manejador = {
    set(objeto, propiedad, valor) {
        if (Object.keys(objeto).indexOf(propiedad) === -1) {
            console.log(`La propiedad ${propiedad} no existe en el objeto persona`);
        }
        if (propiedad === 'nombre' || propiedad === 'apellido' && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))) {
            console.log(`El valor ${valor} no es un nombre o apellido valido`);
        }
        objeto[propiedad] = valor;
    }
}


const datoPersona = new Proxy(persona, manejador);
datoPersona.nombre = 'Juan';
datoPersona.apellido = 'Gonzalez';
datoPersona.edad = 22;
datoPersona.redSocial = 'GhostamenUrs';

console.log(datoPersona);