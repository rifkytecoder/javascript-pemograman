// todo IF Kondisi

// IF 
const isRaining = true;

console.log('Persiapan sebelum berangkat kerja.\n');

if (isRaining) {
    console.log('Hari ini hujan. Bawa payung. \n');
}

console.log('Berangkat kerja \n');

// IF/ELSE
let nilaiA = 50;

if (nilaiA > 70) {
    console.log('Lulus \n');
} else {
    console.log('Tidak lulus \n');
}


// IF/ELSE IF/ELSE
let karakter = 'Zoro';
let senjata;

if (karakter === 'Zoro') {
    senjata = 'Katana';
    //console.log(senjata);
} else if (karakter === 'Luffy') {
    senjata = 'Pukulan';
    console.log(senjata);
} else if (karakter === 'Sanji') {
    senjata = 'Tendangan';
    console.log(senjata);
} else {
    console.log(`Karakter ${karakter} tidak di temukan \n`);
}

console.log(senjata);


// Ternari IF/ELSE
const isFly = true;
const burung = isFly ? 'Terbang' : "Tidak Terbang";

console.log(burung);