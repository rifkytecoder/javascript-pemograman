// todo Object 
// Object adalah tipe data kompleks untuk menyimpan banyak data dengan format key-value. 
// Key pada object harus berupa string.

// strukture data object <key : value>
const onepiece = {
    luffy: "gomu gomu",
    buggy: "bara bara",
    ace: "mera mera",
    perona: "horo horo",
    rilis: 1999,
    'wano kuni': 'new world',
};

// akses value dari properti object <key>
console.log(`Pemakan buah? ${onepiece.luffy}`);
console.log(`Pemakan buah? ${onepiece.buggy}`);
console.log(`Production tahun? ${onepiece.rilis}`);
// cara akses properti <key> yg menggunakan spasi
console.log(`Ark dimana sekarang? ${onepiece['wano kuni']}`);

// example #2
const kruSHP = {
    luffy: "tinju",
    zoro: "pedang",
    sanji: "kaki",
};

// mengubah nilai properti dengan operator (=)
kruSHP.luffy = 'mugiwara';
kruSHP.zoro = 'kaizoku';
kruSHP['sanji'] = 'kuro ashi';

// kalau properti <key> belum ada maka akan ditambahkan ke properti Object
kruSHP.usopp = "sogeking";

console.log(`Nama Julukan ${kruSHP.luffy}`);
console.log(`Nama Julukan ${kruSHP.zoro}`);
console.log(`Nama Julukan ${kruSHP.sanji}`);

// print semua nilai object
console.log(kruSHP);

// hapus properti <key> object
delete kruSHP.sanji;

console.log(kruSHP);
