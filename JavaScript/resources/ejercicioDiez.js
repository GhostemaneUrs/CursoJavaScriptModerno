/* Ejercicio Fizz Buzz */
/* 3 6 9 12 = Fizz */
/* 5 10 15 20 = Buzz */
/* 15 30 45 = Fizz Buzz */

for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log(`El numero ${index} = Fizz Buzz!`);
    } else if (index % 3 === 0) {
        console.log(`El numero ${index} = Fizz`);
    } else if (index % 5 === 0) {
        console.log(`El numero ${index} = Buzz`);
    }
}
