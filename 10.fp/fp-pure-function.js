// todo Konsep Functional Programming

//todo Pure function
// tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);  // ✔
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// todo Pure function
// dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja.
const createPersonWithAge = (age, person) => {
    return { ...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,   // { name: 'Bobo' }, // ✔
    newPerson
});

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
*/

//! Impure function
let PI = 3.14;
const hitungLuasLingkarans = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkarans(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah // ❌

console.log(hitungLuasLingkarans(4)); // 80

//! Impure function
const createPersonWithAges = (age, persons) => {
    persons.age = age;
    return persons;
};

const persons = {
    name: 'Bobo'
};

const newPersons = createPersonWithAges(18, persons);

console.log({
    persons,   // person: { name: 'Bobo', age: 18 }, // ❌
    newPersons
});

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

//? pastikan 3 konsep ini ada pada fungsi yang Anda buat.
/*  1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
    2. Hanya bergantung pada argumen yang diberikan.
    3. Tidak menimbulkan efek samping.
Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function. */