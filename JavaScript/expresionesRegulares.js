/* Expresiones regulares en JavaScript */
/* Es una secuencia de caracteres que forma un patron de busqueda */
let cadena = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu lorem fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

let reg = /lorem/ig
console.log(reg.test(cadena)); /* Dice true si se encontro o false si no lo hizo */
console.log(reg.exec(cadena)); /* Te dice explicitamente donde esta */