// todo Destructuring
//memecah struktur data menjadi bagian-bagian yang lebih kecil

// example #1 Array
// variabel arrays
const warna = ['merah', 'biru', 'kuning'];

//! destructuring (mengeluarkan nilai) konvensional di array
const red = warna[0];
const blue = warna[1];
const yellow = warna[2];

console.log(red, blue, yellow);

// todo destructuring Array
// array
const buah = ['durian', 'jeruk', 'mangga', 'anggur', 'jambu'];

// destructuring array (berdasarkan posisi)
const [one, two, three, four] = buah;

// memilih index tertentu tpi ttp membiarkan index lainnya ttp kosong
const [, , , , five] = buah;

// cetak
console.log(one, two, three, four);
console.log(five);

// swap nilai / tukar nilai variabel
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a);
console.log(b);

// destructuring default value 
const masakan = ['bakso', 'soto'];
const [menu1, menu2, menu3 = 'lalapan'] = masakan;

console.log(menu1, menu2, menu3);



//================================================================//

// example #2 Object
// variabel Object
const profile = {
    firstName: 'Rifky',
    lastName: 'Te',
    age: 29,
    hobi: 'drawing',
    color: 'biru'
};

//! destructuring konvensional di object
const firstNamee = profile.firstName;
const lastNamee = profile.lastName;
const agee = profile.age;
console.log(firstNamee, lastNamee, agee);

//todo destructuring Object
const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);

const { hobi } = profile;
console.log(hobi);

// optional nilai default jka property tidak ada
const { color, jurusan = 'informatika' } = profile;
console.log(color, jurusan);

// example #3 Different local variable names
// variable object
const warnaBuah = {
    apel: 'merah',
    pisang: 'kuning',
    anggur: 'ungu'
};

// destructuring different local variable name
const { apel: satu, pisang: dua, anggur: tiga } = warnaBuah;

console.log(satu);
console.log(dua);
console.log(tiga);
