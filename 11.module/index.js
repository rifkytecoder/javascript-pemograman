// todo Import
// Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variabel lokal pada umumnya.

// import
// style destructuring
const { coffeeStock, isCoffeeMachineReady } = require('./state'); // nama var sama dgn yg di exports
//import { coffeeStock as stock, isCoffeeMachineReady } from './state.js'; // ES6 format module


console.log(coffeeStock);
console.log(isCoffeeMachineReady);
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log('Kopi berhasil dibuat');
    } else {
        console.log('Biji kopi habis');
    }
}

makeCoffee('robusta', 80);
/* output
Kopi berhasil dibuat!
*/

// "type": "module",  -> tambahkan di packageJson untuk ES6 format module
