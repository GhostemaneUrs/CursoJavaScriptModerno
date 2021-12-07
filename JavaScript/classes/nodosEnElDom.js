/* Nodos en el DOM */

/* Metodos que no se utilizan mas */
console.log(document.getElementsByTagName("li")) /* Sirve para traers elementos por nombre de etiqueta*/
console.log(document.getElementsByClassName("card")) /* Sirve para traers elementos por nombre de clase de etiqueta */
console.log(document.getElementsByName("nombre")) /* Sirve para traers elementos por nombre de clase de etiqueta */

const encabezado = document.querySelector('h1') /* Sirve para atraer el nodo del elemento, solo escoge uno, tambien sirve para coger clases. El querySelectorAll escoge todo los elementos */
encabezado.style.fontFamily = 'Arial, sans-serif' /* Sirve para cambiar el estilo del nodo */
encabezado.style.fontSize = '50px' /* Sirve para cambiar el estilo del nodo */
console.log(encabezado)
console.log(`Primera forma: ${encabezado.innerText}`) /* Sirve para traer el contenido del nodo, si en el css -visibility: hidden no lo encontrara */
console.log(`Segunda forma: ${encabezado.textContent}`) /* Sirve para traer el contenido del nodo, si en el css -visibility: hidden si lo encontrara */
console.log(`Tercera forma: ${encabezado.innerHTML}`) /* Se trae el html */

document.querySelector('h1').textContent = 'Hola, he modificado el html en JavaScript' /* Sirve para cambiar el contenido del nodo */

/* Modificar una imagen en JavaScript */

const img = document.querySelector('.card img')
img.src = 'https://placeimg.com/200/200/tech'
console.log(img)
const card = document.querySelector('.card')
card.classList.add('black') /* Sirve para agregar una clase nueva */
card.classList.remove('black') /* Sirve para eliminar una clase nueva */

const navegacion = document.querySelector('.navegacion')
console.log(navegacion)
console.log(navegacion.childNodes) /* Sirve para traer todos los nodos hijos */
console.log(navegacion.children) /* Sirve para traer todos los nodos hijos */
console.log(navegacion.children[0].nodeName) /* Sirve para traer el nombre del nodo hijo */
console.log(navegacion.children[0].nodeType) /* Sirve para traer el tipo del nodo hijo */



