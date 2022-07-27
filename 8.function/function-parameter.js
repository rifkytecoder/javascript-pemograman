// todo Function Parameter
// Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi

// deklarasi fungsi ber-parameter
function multiply(a, b) {
    return a * b;
}

// var Object
const user = {
    id: 10,
    displayName: 'Luffy',
    fullName: 'Mugiwara',
};

// deklarasi fungsi berparameter object
// Jika parameter dari fungsi adalah sebuah object,
// kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// default parameter
function luasLingkaran(r, pi = 3.14) {
    let luas = pi * r;
    return luas;
}

console.log(luasLingkaran(3));

// Rest parameter
// dapat menggabungkan beberapa elemen menjadi satu array.  
// ketika hendak membuat sebuah fungsi dengan parameter yang tidak pasti.
function sum(...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}

console.log(sum(1, 2, 3, 4, 5));