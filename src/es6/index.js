// Function paramethers - In the past
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';

    console.log(name, age, country);
}

// Function paramethers - Actually (Es6)
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

// Template Literals - In the past
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Template Literals - Actually (Es6)
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// "\n" Line skip - In the past
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "Otra frase epica que necesitamos.";

// [] - Actually (Es6)
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// DeEstructuracion de elementos - In the past
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age, person.country);

// [] - Actually (Es6)
let { name, age, country } = person;
console.log(name, age, country);

// In the past
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let team = ['David', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila'];

// [] - Actually (Es6)
let education = ['David', ...team1, ...team2];
console.log(education);

// Disponible en todos los bloques.
{
    var globalVar = "Global Var";
}
console.log(globalVar);

// Solo disponible en el bloque de codigo al que lo agreguemos.
{ 
    let globalLet = "Global Let";
    console.log(globalLet);
}

// Las const son siempre constantes XD
const a = 'b';
a = 'a';
console.log(a);

// Es5
let name1 = 'oscar';
let age1 = 32;
// [] - Actually (Es6)
obj = { name1: name1, age1: age1 };
obj2 = { name1, age1 };
console.log(obj2);

//Arrow fuctions = Funciones anonimas
const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

// [] - Actually (Es6)
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //...
};

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

// Asincronismo (Promesas) - Callback help = functions anidadas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

// var Taipo = error;

//class
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB
        
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// Import and Export
import { hello } from './module.js';
hello();

// Generators
//Guarda de forma interna donde se quedo
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);