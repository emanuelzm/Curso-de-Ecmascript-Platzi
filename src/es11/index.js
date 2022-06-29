//Dinamyc import - Se carga en el sitio web, cuando se necesita ejecutar el codigo
const button = document.getElementById("btn");

button.addEventListener('click', async function () {
    const module = await import("./file.js");
    module.hello();
});

//Big In
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise Old Secold
// A esta no le importa si una u otra promesa esta rechasada, espera y las ejecuta todas.
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));


// Hacen lo mismo pero globalThis es multiPlataforma (no necesariamente vive en el navegador)
console.log(globalThis);
  console.log(window);
  console.log(self);
  console.log(frames);
  console.log(this);

// Hacer preguntas
const fooo = 'null' ?? 'default string';
console.log(fooo);

// Opcional shaining - Mirar por niveles ? 
const user = {};

/*
Correct: console.log(user?.profile?.email);
Bad: console.log(user.profile.email);
*/

if(user?.profile?.email) {
  console.log('email');
} else {
  console.log('fail');
}