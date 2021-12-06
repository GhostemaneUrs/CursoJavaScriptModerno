/* Metodos estaticos, getter, setter en JavaScript, */

class Animal {
    //Constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar() {
        console.log(`El animal ${this.nombre} te está saludando`)
    }

    comer() {
        console.log(`El animal ${this.nombre} esta comiendo`)
    }
}

/* Haciendo herencia con clases en JavaScript */

class Perro extends Animal {
    constructor(nombre, genero, altura) {
        super(nombre, genero);
        this.altura = altura;
        this.raza = '';
    }

    /* Este es un obtenedor de datos */

    get getRaza() {
        return `La raza del perro ${this.nombre} es: ${this.raza}`;
    }

    /* Este es un modificador de datos */

    set setRaza(raza) {
        this.raza = raza;
    }

    saludar() {
        console.log(`El perro ${this.nombre} te está saludando`)
    }

    ladrar() {
        console.log(`El perro ${this.nombre} esta ladrando ==> Guau guau!`)
    }

    /* Metodo estatico en JavaScript */

    static dormir() {
        console.log('El perro esta durmiendo..')
    }
}


const scooby = new Perro('Scooby', 'Macho', 'Mediano')
console.log(scooby)
scooby.ladrar()
scooby.setRaza = 'Schnauzer'
console.log(scooby.getRaza)