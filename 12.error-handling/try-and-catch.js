// todo Try and Catch
/*kode yang berpeluang menimbulkan eror di dalam blok try.
  bila terjadi eror di dalam blok kode try,
  ia akan ditangkap dan ditangani oleh blok kode catch.
  jika tidak terjadi eror pada kode,
  blok catch akan diabaikan. */


// example #1 jika tidak ada error
try {
    console.log('first block try');
    console.log('second block try');
    console.log('last block try \n');

} catch (error) {
    console.log('tidak terjadi error, maka kode ini diabaikan \n');
}
/* output
first block try
second block try
last block try */

// example #2 jika terjadi error
/*Baris kode (2) akan menghasilkan eror.
  Eksekusi kode di dalam blok try akan dihentikan, sehingga baris kode (3)
  tidak akan tereksekusi.
  Kemudian kode akan dilanjutkan ke baris (4) atau blok catch. */
try {
    console.log('awal block try');
    codeError;
    console.log('akhir block try');
} catch (error) {
    console.log('terjadi error! \n');

    // properti object error
    console.log(error.name);     // nama error yg terjadi
    console.log(error.message); // pesan ttg detail error
    console.log(error.stack);  // struktur urutan kejdian yg mnybkn error
}
/* output
awal blok try
terjadi error!

ReferenceError
codeError is not defined
ReferenceError: codeError is not defined
*/

// todo Try-Catch-Finally
// Blok finally akan ttp djlnkn tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
try {
    console.log('awal block try');
    console.log('akhir block try');
    // myCodeError;
} catch (error) {
    console.log('terjadi error !'); // diabaikan jika tdk ada Error
} finally {
    console.log('akan tetap di eksekusi');
}

/*output
awal block try
akhir block try
akan tetap di eksekusi*/
