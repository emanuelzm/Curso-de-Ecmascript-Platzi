// Replace old
const string = "Javascript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("Javascript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2);

// Metodos privados - Prefix "You don't have access"
class Message {
    #show(val) { // Only in the class
        console.log(val);
    }
    //get #add(val) {
    //    console.log(val);
    //}
}

const message = new Message();
message.show("Hola");

// Retorneme el primero que se resuelva
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));

//Taipo error 13/14

// evitar que la estructura interna del lenguaje elimine cierto elemento importante => WeakRef
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    };
    /* seguir con el programa {
        console.log(element);
    }*/
}

// Comparaciones 
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); // And And
 
let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1); // Or

let isUndefined2 = undefined;
let isFalse2 = false;
console.log(isUndefined2 ??= isFalse2); // Null elements