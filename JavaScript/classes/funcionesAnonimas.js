/* Funciones anonimas autoejecutables en JavaScript */

(function (a, b) {
    console.log(suma = a + b)
    console.log('Version clasica')
})(10, 10);

((function () {
    console.log('Version crockford')
})());

+function () {
    console.log('Version Unaria')
}();

!function () {
    console.log('Version Facebook')
}();


