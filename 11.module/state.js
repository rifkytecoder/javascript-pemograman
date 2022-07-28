//todo Exports
/*Modul bekerja dengan cara exporting dan importing nilai.
  agar bisa digunakan pada berkas JavaScript lain. 
  Satu berkas JavaScript terdiri dari satu module yang dapat kita export 
  menjadi lebih dari satu nilai. */

// var object
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

// var
const isCoffeeMachineReady = true;

// exports
module.exports = { coffeeStock, isCoffeeMachineReady }; // object literal ✔
// module.exports = isCoffeeMachineReady; //! ❌

//console.log(module); // testing module

// export { coffeeStock, isCoffeeMachineReady }; // ES6 format module