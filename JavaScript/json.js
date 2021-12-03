/* Json en JavaScript */
/* Convertir datos String en datos JSON */
console.log(JSON.stringify({
    "nombre": "Andres",
    "apellido": "Jaramillo",
    "edad": "22",
    "pais": "Colombia",
    "hobbies": ["Leer", "Dormir", "Comer"]
}));

/* Convertir datos JSON a un dato primitivo */
console.log(JSON.parse('{"nombre": "Andres","apellido": "Jaramillo","edad": "22","pais": "Colombia","hobbies": ["Leer", "Dormir", "Comer"]}'))