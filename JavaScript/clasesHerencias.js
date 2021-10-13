/* Clases & herencias en JavaScript */

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
    constructor(nombre, genero, altura, raza) {
        super(nombre, genero);
        this.altura = altura;
        this.raza = raza;
    }

    saludar() {
        console.log(`El animal ${this.nombre} te está saludando`)
    }

    ladrar() {
        console.log(`El animal ${this.nombre} esta ladrando ==> Guau guau!`)
    }
}


const scooby = new Perro('Scooby', 'Macho', 'Mediano', 'Schnauzer')
console.log(scooby)
scooby.ladrar()