// todo Reusable #5

//todo Array map
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });
console.log(newArray);
/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */

//todo Array filter
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */

// example #2 Array filter
const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */

//todo Array reduce
const student = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 80,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 70,
    }
];

const totalScore = student.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 300
 * 
 */

//todo Array some
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/** 
output true
**/

//todo Array find
const studentss = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const findJames = studentss.find(student => student.name === 'James');
console.log(findJames);

/**
output
{ name: 'James', score: 88 }
**/

//todo Array sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

// example #2 array sort
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

//todo Array every
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/

//todo Array forEach
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

names.forEach((name) => {
    console.log(`Hello, ${name}!`);
});

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */

//! array forEach
const namee = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for (let i = 0; i < namee.length; i++) {
    if (namee[i] === 'Jeff') continue; // Bisa!

    console.log(`Hello, ${names[i]}!`);
}

// names.forEach((name) => {
//     if (name === 'Jeff') continue; // Tidak Bisa!
//     console.log(`Hello, ${name}`);
// });