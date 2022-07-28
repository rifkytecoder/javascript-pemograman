// todo Class

// deklarasi Class/Syntactic sugar :D
class Manusia {
    // property/attribute
    #rambut; // private modifier
    constructor(nama) {
        this.nama = nama;
        this.kelamin = '';
        this.hobi = [];
        this._kulit = 'private';
        this.#rambut = 'hitam';

    }

    // method public
    greet(msg) {
        console.log(`${msg}`);
    }

    // method private
    #hello(msg) {
        console.log(`${msg}`);
    }

    // method static
    static isValidPhone(phone) {
        return typeof phone === 'number';
    }

}

// instantiate
const hero = new Manusia('Spiderman');
hero.nama;
hero.kelamin = 'Laki-laki';
hero.hobi = ['masak', 'gambar', 'coding'];
hero.kulit; // undefined

hero.greet('Work from home');

// panggil static method 'tanpa intantiate'
console.log(Manusia.isValidPhone(08132222222));


console.log(hero.nama);
console.log(hero.kelamin);
console.log(hero.hobi);
console.log(hero.kulit);


//! Class style prototype #2
function DevilFruits(nama) {
    this.nama = nama;
    this.tipe = '';
};

DevilFruits.prototype.kekuatan = function (power) {
    console.log(`${power}`);
};

const heroo = new DevilFruits('Buggy');
heroo.nama;
heroo.tipe = 'Paramecia';
heroo.kekuatan('Membela diri');

console.log(heroo.nama);
console.log(heroo.tipe);



