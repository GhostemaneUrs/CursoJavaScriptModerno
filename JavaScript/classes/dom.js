/* Web apis, dom  en JavaScript */

let texto = 'Hola Andres, tú puedes el dia de mañana'
const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

hablar(texto)
/* Puedo recorrer los nodos del archivo HTML5 */
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(() => {
    console.log(document.getSelection().toString())
}, 3000)

document.write('<h1>Hola mundo</h1>')