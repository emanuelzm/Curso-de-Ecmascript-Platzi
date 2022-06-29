// Nuevos cambios de Ecmascript

// Arreglo de numeros
let numbers = [1,2,3,4,5,6,7];

if (numbers.includes(7)) { // Busca el numero 7 en el arreglo - Antes IndexOf
    console.log('Si se encuentra el valor 7');
} else {
    console.log('No se encuentra.');
}

// Como elevar a la Potencia
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);
