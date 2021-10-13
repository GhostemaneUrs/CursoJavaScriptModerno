/* Herencia prototipica en JavaScript */

function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

function Perro(nombre, genero, tamaño, raza) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamaño = tamaño;
}

Animal.prototype.saludar = function () {
    console.log(`${this.nombreCompleto} esta diciendo: Hola, ¿como estas?`)
}

Animal.prototype.comer = function () {
    console.log(`El perro ${this.nombre} esta comiendo`)
}

/* Perro hereda de animal */

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

/* Sobrescribiendo metodos el prototipo padre */

Perro.prototype.saludar = function () {
    console.log('El perro esta ladrando ==> Guau guau!')
}

const zeus = new Perro('Zeus','Macho','Mediano', 'Schnauzer')
console.log(zeus)
zeus.saludar()
zeus.comer()