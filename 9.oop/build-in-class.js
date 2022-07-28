//todo Build-in Class 
// utilitas terkait tanggal dan waktu.

// todo Date build-in class
// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = (birthday) => {
    const birtday = new Date(birthday);
    // today menghasilkan nilai miliseconds saat ini
    const today = Date.now();

    // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diff_ms = today - birtday.getTime();
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970;
}

console.log(myAge('1993-01-20')); // 29

const myDate = new Date();
const bulan = myDate.getMonth();
const tahun = myDate.getFullYear();
const tanggal = myDate.getDate();
const jam = myDate.getHours();
const menit = myDate.getMinutes();
const detik = myDate.getSeconds();
const milidetik = myDate.getMilliseconds();
const waktu = myDate.getTime();
const hari = myDate.getDay();


console.log(bulan); // 6  'hitungan index artinya 7'
console.log(tahun); // 2022
console.log(tanggal); // 28
console.log(jam); // 9
console.log(menit); // 2
console.log(detik); // 1
console.log(milidetik); // 924
console.log(waktu); // 1658970121924 'epoch mili-detik'
console.log(hari); // 4  'hitungan index'



//todo Array build-in class
const listOfContent = [1, 2, 'bunga', {}];
console.log(Array.isArray(listOfContent)); // true

const splitText = '12:20:00'.split(':');
console.log(splitText); // [ '12', '20', '00' ]


// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
// const myDateA = new Date();

// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021"
// const myDateB = new Date(dateString);

// #3 parameter dalam bentuk number, misal 87400000
// const myDateC = new Date(miliseconds);

// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
// const myDateD = new Date(year, month, date, hour, minute, second, millisecond);


