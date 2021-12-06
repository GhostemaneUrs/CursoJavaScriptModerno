/* Propiedades dinamicas en JavaScript */

let idAleatorio = Math.round(Math.random() * 100 + 4)
const objUsuarios = {
    [`id_${idAleatorio}`]: 'Andres'
}


const usuarios = ['Antonio', 'Beidys', 'Keiner', 'Alan']

usuarios.forEach((usuarios, index) => objUsuarios[`id_${index + 1}`] = usuarios)
console.log(objUsuarios)

