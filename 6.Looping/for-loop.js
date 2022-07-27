// todo Looping

// FOR
// “Saat i kurang dari 10, maka tampilkan nilai i.”
// cetak angka 0 - 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('');

// Array variabel
const SHP = ['luffy', 'zoro', 'sanji', 'usopp', 'nami'];

// cetak semua data Array SHP #1
for (const iterator of SHP) {
    console.log(iterator);
}

// cetak semua data Array SHP #2
SHP.forEach(element => {
    console.log(element);
});

// cetak semua data Array SHP #3
for (let i = 0; i < SHP.length; i++) {
    const element = SHP[i];
    console.log(element);
}