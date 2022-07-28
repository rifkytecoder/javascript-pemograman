// todo Immutability #2
// sebuah objek tidak boleh diubah setelah objek tersebut dibuat.

// todo Immutability 
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

// terapkan perubahan tersebut pada nilai return dalam objek baru.
const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }  // : ✔
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

// ! konvensional 
const users = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

// alih-alih mengubah nilai objek secara langsung,
const renameLastNameUser = (newLastName, users) => {
    users.lastName = newLastName;   // ❌
}

renameLastNameUser('Potter', users);

console.log(users);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */

// ? Selain itu
/*Anda juga bisa menyesuaikan nama fungsinya dari renameLastNameUser 
menjadi createUserWithNewLastName. 
Hal itu perlu untuk mengindikasikan bahwa fungsi mengembalikan 
atau menghasilkan objek user baru. */
