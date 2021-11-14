/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3
    instancias de la clase de forma automatizada e imprime la ficha técnica
    de cada película.
*/

const generosAceptados = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

class Movie {
    constructor({ id, titulo, director, añoEstreno, paisOrigen, genero, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.añoEstreno = añoEstreno;
        this.paisOrigen = paisOrigen;
        this.genero = genero;
        this.calificacion = calificacion;
        this.validarId(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(añoEstreno);
        this.validarPais(paisOrigen);
        this.validarGenero(genero);
        this.validarCalificacion(calificacion);
    }

    validarId(id) {
        const expresionRegular = /^[a-zA-Z]{2}\d{7}$/;
        if (!id) {
            console.log("El id no puede estar vacio");
        } else if (typeof id !== 'string') {
            console.log("El id debe ser un string");
        } else if (expresionRegular.test(id) === false) {
            console.log("El id debe tener un formato valido");
        }
    }

    validarTitulo(titulo) {
        if (!titulo) {
            console.log("El titulo no puede estar vacio");
        } else if (typeof titulo !== 'string') {
            console.log("El titulo debe ser un string");
        } else if (titulo.length > 100) {
            console.log("El titulo no puede ser mayor a 100 caracteres");
        }
    }

    validarDirector(director) {
        if (!director) {
            console.log('El director no puede estar vacio')
        } else if (typeof director !== 'string') {
            console.log("El director debe ser un string");
        } else if (director.length > 50) {
            console.log("El director no puede ser mayor a 50 caracteres");
        }
    }

    validarEstreno(añoEstreno) {
        if (!añoEstreno) {
            console.log("El valor no puede ser vacio")
        } else if (typeof añoEstreno !== 'number') {
            console.log("El año de estreno debe ser un numero");
        } else if (añoEstreno.toString().length !== 4) {
            console.log("El año de estreno debe tener 4 digitos");
        } else if (Math.max(añoEstreno) > 2021 || Math.min(añoEstreno) < 1895) {
            console.log("no puede haberse estrenado una pelicula este año, porfavor revisa la entrada de año de estreno");
        }
    }

    validarPais(pais) {
        if (!pais) {
            console.log("El valor no puede ser vacio")
        } else if (!pais instanceof Array) {
            console.log("Introduzca el valor en formato tipo array")
        }
    }

    validarGenero(genero) {
        if (!genero) {
            console.log("El valor no puede ser vacio")
        } else if (!genero instanceof Array) {
            console.log("Introduzca el valor en formato tipo array")
        } for (let index = 0; index < generosAceptados.length; index++) {
            const genero = generosAceptados[index];
            if (generosAceptados.includes(genero) === false) {
                console.log(`Introduzca un valor valido, escoja alguno de los que esta acá: ${generosAceptados}`)
            }
        }
    }

    validarCalificacion(calificacion) {
        if (!calificacion) {
            console.log("El valor no puede ser vacio")
        } else if (typeof calificacion !== "number") {
            console.log("Solo se permiten valores numericos")
        } else if (calificacion < 0 || calificacion > 10) {
            console.log("La calificacion solo puede ser del 0 al 10")
        } else {
            this.calificacion = calificacion.toFixed(1)
        }
    }

    fichaTecnica() {
        console.log(`------------------------------- \n Ficha tecnica \n IMDB: ${this.id} \n Titulo: ${this.titulo} \n Director: ${this.director} \n Estreno: ${this.añoEstreno} \n Genero: ${this.genero} \n Calificacion: ${this.calificacion} \n ------------------------------`)
    }

    static getGenero() {
        console.log(`Los generos aceptados son: ${generosAceptados}`)
    }
}

const peliculas = [
    {
        id: "AB3458678",
        titulo: "Spider Man No Way Home",
        director: "Jon Watts",
        añoEstreno: 2021,
        paisOrigen: ["New York"],
        genero: ["Action", "Adult"],
        calificacion: 9.5
    },
    {
        id: "CD3458678",
        titulo: "Venom Carnage Liberado",
        director: "Andy Serkis",
        añoEstreno: 2021,
        paisOrigen: ["Londres"],
        genero: ["Action", "Adult"],
        calificacion: 7.5
    },
    {
        id: "DV3453478",
        titulo: "¡Shazam!",
        director: "David F. Sandberg",
        añoEstreno: 2019,
        paisOrigen: ["Londres"],
        genero: ["Action", "Adult"],
        calificacion: 9.5
    },
]

peliculas.forEach(listarPeliculas => {
    const peliculasListadas = new Movie(listarPeliculas)
    peliculasListadas.fichaTecnica()
});




