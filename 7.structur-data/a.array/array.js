// todo Array
//Array digunakan untuk menyimpan banyak data. 
//Data pada array disusun secara berurutan dan diakses menggunakan index.

// Array
const fruits = ['apel', 'jeruk', 'anggur', 'strawberi', 10, 20];

// cetak semua element index
console.log(fruits);

// cetak element ke 1 atau indek 0
console.log(fruits[0]); // apel

// tambah data ke index terbawah
fruits.push('mangga');
fruits.push(30);
console.log(fruits);

// keluarkan data dari index terbawah
fruits.pop();
console.log(fruits);

// tambah data ke index teratas
fruits.unshift('pisang');
fruits.unshift(40);
console.log(fruits);

// keluarkan data dari index teratas
fruits.shift();
console.log(fruits);

// hanya menghapus data element bukan index
//delete fruits[1];

// Menghapus dari index 2 sebanyak 1 elemen
fruits.splice(2, 1);
console.log(fruits);


