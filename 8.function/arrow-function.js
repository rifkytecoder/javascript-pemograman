// todo Arrow function
// Arrow function mirip seperti regular function secara perilaku

// deklarasi fungsi Arrow expression
const sayHello = (greet) => {
    console.log(`${greet}`);
}
sayHello('Hello Dunia');

const sayName = (name) => {
    console.log(`Kimi no nawa ${name}`);
}
sayName('Hero');

// fungsi arrow tanpa parameter/prosedur
const hello = () => {
    console.log('Hello World');
}
hello();

// fungsi arrow satu baris
const perkalian = (a, b) => a * b;
console.log(perkalian(3, 3));