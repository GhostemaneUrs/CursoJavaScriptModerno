/* Objeto this en JavaScript */
/* No se recomienda usar arrow function, si no funciones anonimas, porque la arrow function respeta el scope en el cual fue creado, lo cual crea conflicto con propiedades this */

this.nombre = 'Contexto global'

function imprimir() {
    console.log(this.nombre)
}

imprimir()

const objeto = {
    nombre: 'Contexto objeto',
    imprimir: function () {
        console.log(this.nombre)
    }
}

objeto.imprimir()

const objetoDos = {
    nombre: 'Contexto objeto numero dos',
    imprimir
}

objetoDos.imprimir()

const objetoTres = {
    nombre: 'Contexto objeto numero tres',
    /* Las arrow function conservan el contexto en el cual fueron creados */
    imprimir: () => {
        console.log(this.nombre)
    }
}

objetoTres.imprimir()

function Persona(nombre) {
    this.nombre = nombre;
    return () => {
        console.log(this.nombre)
    }
}

let andres = new Persona('Andres')
andres()
