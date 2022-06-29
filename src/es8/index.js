// async away

// object.entryes: clave y valores de una matriz

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// Solo nos trae los valores

const data1 = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);

// añadir texto al inicio o al final de un string

const string = "hello";
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, ' -----'));

const obj = {
    name: '', // Añadir siempre una coma a si no siga ningun elemento
}

// Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
          ?  setTimeout(() => resolve('Hello World'), 3000)
          : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    //const hello2 = await helloWorld2();
    console.log(hello);
};

helloAsync();

const anothorFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anothorFunction();