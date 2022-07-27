// todo Switch Kondisi

// Switch
let karakter = 'Roger';
let senjata = null;

switch (karakter) {
    case 'Zoro':
        senjata = 'Katana';
        break;
    case 'Luffy':
        senjata = 'Pukulan';
        break;
    case 'Sanji':
        senjata = 'Tendangan';
        break;
    default:
        console.log(`Karakter ${karakter} tidak di temukan \n`)
        senjata = '';
}

console.log(senjata);