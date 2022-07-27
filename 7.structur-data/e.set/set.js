// todo set
// Set digunakan untuk menyimpan banyak data 
// secara unik, tidak ada duplikasi, tidak berurutan, dan tidak diindeks.

// variable Set
const angkaSet = new Set([2, 3, 1, 3, 2, 6]);

// tampilkan semua data Set 
console.log(angkaSet);

// tambahkan data ke Set
angkaSet.add(10);
console.log(angkaSet);

// hapus data set dgn memasukkan nilainya 
angkaSet.delete(3);
console.log(angkaSet);

//? Ingat bahwa Set tidak memiliki urutan atau index,