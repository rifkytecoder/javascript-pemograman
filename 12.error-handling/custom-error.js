// todo Custom Error
// kelas eror sendiri untuk menunjukkan kesalahan yang spesifik 
// dan tidak tersedia dalam kelas Error bawaan dari JavaScript.

// todo Custom Error
// class validation error
// kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai(spesifik)
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

let jsonB = '{"age" : 30}';

try {

    let user = JSON.parse(jsonB)

    if (!user.name) {
        throw new ValidationError("'name' is required "); // pesan spesifik
    }
    if (!user.age) {
        throw new ValidationError("'age' is required "); // pesan spesifik
    }

    console.log(user.name);
    console.log(user.age);

} catch (error) {

    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error : ${error.message}`);

    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);

    } else if (error instanceof ReferenceError) {
        console.log(error.message);

    } else {
        log.error(error.stack);
    }

}
/* output
Invalid data: 'name' is required.
*/

// !example tanpa custome
let json = '{"age" : 30}';

try {

    let user = JSON.parse(json)

    if (!user.name) {
        throw new SyntaxError("'name' is required ");
    }

    console.log(user.name);
    console.log(user.age);

} catch (error) {

    if (error instanceof SyntaxError) {
        console.log(`JSON Error : ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }

}
/* output
JSON Error : 'name' is required.
*/

