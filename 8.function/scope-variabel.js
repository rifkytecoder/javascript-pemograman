// todo Scope Variable
// scope variabel hanya dapat diakses pada cakupan fungsi(global) 
// dan fungsi turunannya saja(local).

// var global
const a = 'var global';

function induk() {
    // var local
    const b = 'var induk';

    function anak() {
        // var local
        const c = 'var anak'
    }
}

// example #1 salah meletakkan scope variabel
const multiply = (num) => {
    // mengakses global var
    total = num * num;
    return total;
}

// var global
let total = 10;

let hasil = multiply(5);

console.log(total); // 25 

//? hati-hati dalam pembuatan var global agar menghindari collision/tabrakan