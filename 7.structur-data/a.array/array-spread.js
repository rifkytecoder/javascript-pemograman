//todo spread Operator

// array
const hobi = ['gambar', 'gitar', 'mendaki', 'wibu'];

// cetak semua element index hobi
console.log(hobi);

// spread operator ... iterable object/menyebarkan
console.log(...hobi);

// cara konvensional
console.log(hobi[0]);
console.log(hobi[1]);
console.log(hobi[2]);
console.log(hobi[3]);

// example #2
const months = ['januari', 'februari', 'maret', 'april'];
const days = ['senin', 'selasa', 'rabu', 'kamis'];

// gabungkan array konvensional
const allKalender = [months + days];
console.log(allKalender);

// spread operator gabungkan array
const allKalenderS = [...months, ...days];
console.log(allKalenderS);

// contoh #3 Literal Object
// Object
const obj1 = { firstName: "vinsmoke", age: "25" };
const obj2 = { lastName: "vinsmoke", gender: "Male" };

// gabungkan object dgn spread operator
const newObj = { ...obj1, ...obj2 };
console.log(newObj);

