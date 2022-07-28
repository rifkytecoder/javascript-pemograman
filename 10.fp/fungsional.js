// todo Paradigma Functional Programming
// proses komputasi didasarkan pada fungsi matematika murni.
// yang berfokus pada “what to solve” dibanding “how to solve” 
// yang dianut oleh gaya imperatif.

// todo Deklaratif  `what to solve`
const names = ['luffy', 'zoro', 'sanji', 'usopp'];

const newNames = names.map(name => `${name}!`); // ✔

console.log(newNames); // [ 'luffy!', 'zoro!', 'sanji!', 'usopp!' ]


//! Imperatif `how to solve`
const nama = ['nami', 'chopper', 'robin', 'franky', 'brook', 'jimbe', 'yamato'];

const newNama = [];

for (const iterasi of nama) {
    newNama.push(`${[iterasi]}!`);
}

console.log(newNama);
/* [
    'nami!',   'chopper!',
    'robin!',  'franky!',
    'brook!',  'jimbe!',
    'yamato!'
  ] */



/*Array map() merupakan salah satu contoh Higher-Order Function 
  yang ada di JavaScript. Karena dalam penggunaanya, 
  ia menerima satu buah argumen yang merupakan sebuah function. */