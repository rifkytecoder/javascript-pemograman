// todo Map
// Map menyimpan banyak data dengan format key-value seperti object. 
// Namun, key pada Map dapat bertipe apa pun.

// variabel Map
const myMap = new Map();

// example #1
// map dgn menggunakan array multi demensi
const myMaps = new Map([
    ['satu', 'string key'],
    [100, 'number key'],
    [true, true] //boolean key
]);

console.log(myMaps);

// example #2
const negara = new Map([
    ['jakarta', 'indonesia'],
    ['tokyo', 'japan'],
    ['new york', 'amerika']
]);

// print data semua data Map
console.log(negara);

// melihat ukuran panjang dari semua data pada map
console.log(negara.size);

// menambahkan data Map
console.log(negara.set('paris', 'francis'));
console.log(negara.size);
console.log(negara);

// memanggil satuan data key properti dari Map
console.log(negara.get('tokyo'));