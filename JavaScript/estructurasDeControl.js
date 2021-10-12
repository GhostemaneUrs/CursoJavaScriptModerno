/* Estructuras de control en JavaScript */

const validarEdad = function (nombre, edad) {
    if (edad >= 18) {
        console.log(`${nombre} eres mayor de edad, felicidades`)
    } else {
        console.log(`${nombre} eres menor de edad`)
    }
}
validarEdad("Andres", 17)

const saludar = function (nombre, hora) {
    if (hora >= 0 && hora <= 5) {
        console.log(`Dejame dormir ${nombre}, hablaremos mas tarde.`)
    } else if (hora >= 6 && hora <= 11) {
        console.log(`Buenos dias ${nombre}, ¿como estas?`)
    } else if (hora >= 12 && hora <= 18) {
        console.log(`Buenas tardes ${nombre}, ten buen dia.`)
    } else if (hora >= 19 && hora <= 23) {
        console.log(`Buenas noches ${nombre}, lindos sueños.`)
    } else {
        console.log("Escriba una hora valida")
    }
}

saludar("Andres", 1)

/* Operador terneario */

const validarEdadTerneario = function (nombre, edad) {
    edad = (edad >= 18) ? `${nombre} eres mayor de edad` : `${nombre} eres menor de edad`;
}

validarEdad("Maria", 17)

/* Switch - case */

const diaSemana = function (numero) {
    switch (numero) {
        case 0:
            console.log("Hoy es domingo")
            break;
        case 1:
            console.log("Hoy es lunes")
            break;
        case 2:
            console.log("Hoy es martes")
            break;
        case 3:
            console.log("Hoy es miercoles")
            break;
        case 4:
            console.log("Hoy es jueves")
            break;
        case 5:
            console.log("Hoy es viernes")
            break;
        case 6:
            console.log("Hoy es sabado")
            break;
        default:
            console.log("El dia no existe")
            break;
    }
}

diaSemana(1)