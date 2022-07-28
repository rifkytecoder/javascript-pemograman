//todo Higher Order #4
/* JS memiliki kemampuan First Class Functions,
 fungsi pada JS dapat diperlakukan layaknya sebuah data.
 Kita bisa menyimpan function dalam variabel,
 memberikan function sebagai parameter pada fungsi lainnya,
 hingga mengembalikan function di dalam function. */

// todo Higher-order
// function dalam variabel
const hello = () => {
    console.log('Hello!')
};

// function sebagai parameter pada fungsi lainnya,
const say = (someFunction) => {
    someFunction();
}

// mengembalikan function di dalam function.
const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello); // argumen function ✔
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */

//? Higher-Order Function
/* merupakan fungsi 
   yang dapat menerima fungsi lainnya pada argumen; 
   mengembalikan sebuah fungsi; 
   atau bahkan keduanya. */


// my fungsi map
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if (!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
    names,
    newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */