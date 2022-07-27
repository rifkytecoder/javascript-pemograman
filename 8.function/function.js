// todo Function
//fungsi dalam pemrograman digunakan 
//untuk menghasilkan output berdasarkan input tertentu.
//function merupakan sebuah variabel yang berisi blok logika. 
//Blok logika tersebut akan dieksekusi ketika variabelnya dipanggil.

// deklarasi fungsi
function multiply() {
    return 2 + 3;
}

// deklarasi prosedur krna tdk memiliki return
function greetings() {
    console.log('Selamat pagi!');
}

greetings();

// deklarasi fungsi ber-Parameter
function add(a, b) {
    return a + b;
}

// panggil fungsi dgn mengisi Argumen 
console.log(add(2, 5));

// example #1
function greetings(name, language) {
    if (language === 'english') {
        console.log(`Good morning ${name}`);
    }
    else if (language === 'french') {
        console.log(`Bonjour ${name}`);
    } else {
        console.log(`Selamat pagi ${name}`);
    }
}

greetings('Rifky', 'french');

// example #2 return
function perkalian(a, b) {
    return a * b;
}

// setiap expression bisa disimpan ke variabel
let hasil = perkalian(10, 2);
console.log(hasil);

// anonymous function(fungsi tdk bernama)/ expression function
let jumlah = function (a, b) {
    return a + b;
}
console.log(jumlah(5, 7));

//? NB: statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikan nilai.