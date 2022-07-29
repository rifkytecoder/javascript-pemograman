// todo Throwing Error
// Operator(throw) ini akan “melemparkan” eror pada program,
// sehingga eksekusi kode akan masuk pada blok catch.

// example #1 done
// var string
let json = '{ "name": "Yugioh", "age": 25 }';

try {
    // parsing var string ke object JSON
    let user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
/*output
Yugioh
25 */


// example #2 Error Syntax
let jsonB = '{bad json}'; //json tdk sesui format

try {
    let user = JSON.parse(jsonB);

    console.log(user.name);
    console.log(user.age);

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
/* output
SyntaxError
Unexpected token b in JSON at position 1
*/


// todo example #3 Throwing Error. undefined
// mengimplementasikan throw untuk menimbulkan eror kita sendiri:
let jsonC = '{ "age":20 }';

try {

    let user = JSON.parse(jsonC);

    //todo throwing error
    // jika user.name tidak memiliki nilai, maka SyntaxError
    if (!user.name) {
        // lempar sebagai syntax error(membuat stts error sendiri)
        throw new SyntaxError('name is required');
    }

    console.log(user.name); //! undefined
    console.log(user.age);

    errorCode; // contoh error var not defined

} catch (error) {

    console.log(`JSON Error ${error.message} \n`);
    console.log(error.name);
    // console.log(error.message);
}
/* output
   JSON Error name is required */


// example #4
let jsonD = '{ "name":"kaiba" , "age":20 }';

try {

    let user = JSON.parse(jsonD);

    // throwing error
    // jika user.name tidak memiliki nilai, maka SyntaxError
    if (!user.name) {
        throw new SyntaxError('name is requireds');
    }

    errorCodex; //! contoh error var not defined

    console.log(user.name); // kaiba
    console.log(user.age); // 20

} catch (error) {
    // console.log(`JSON Error ${error.message}`);
    // menampilkan pesan eror sesuai eror yang muncul ✔
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

/* output
  SyntaxError
  errorCodex is not defined*/

//? Dengan operator instanceOf, 
/*kita bisa mendapatkan tipe dari eror yang terjadi.
 Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.*/