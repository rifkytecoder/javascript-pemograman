// todo Paradigma OOP

// todo Encapsulation/pembungkusan
// kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat.
class Mail {
    // private property
    #contact;
    constructor(author) {
        // this._contacts = [];
        this.#contact = [];
        this.from = author;
    }

    sendMessage = function (msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this.#contact.push(to);
        // this._contact.push(to);
    }

    showAllContact() {
        return this.#contact;
    }

}

//? kita bisa menambahkannya melalui fungsi/method
//? atau mengambil data tersebut melalui method

const sms = new Mail('usopp');
sms.sendMessage('hello nakama', 'luffy senco');
sms.sendMessage('ohaiyo nama san', 'nami');
sms.sendMessage('superrrrr', 'franky');

console.log(sms.showAllContact());

// todo Abstraction/abstaksi
/* *Merupakan penerapan alami dari enkapsulasi.
 * Abstraksi berarti sebuah objek hanya menunjukkan operasinya secara high-level.
 * Misalnya kita cukup tahu bagaimana pesan dikirim atau diterima,
 * namun kita tidak perlu tahu seperti apa proses enkripsi dan dekripsi isi pesan,
 * atau bagaimana sebuah daftar contact dapat bertambah. */

// todo Inheritance/turunan
// Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, 
// tetapi mereka bukanlah objek yang sama. 
// Di sinilah inheritance atau pewarisan berperan.

class WhatsApp extends Mail {
    constructor(author) {
        super(author);
        this.username = 'onepiece';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp('082388888890');
wa1.sendMessage('ping hahaha', '08124455667'); // fungsi dari induk
wa1.sendMessage('yahooo', '08124499999'); // fungsi dari induk
console.log(wa1.myProfile());
console.log(wa1.showAllContact()); // fungsi dari induk

// todo Polymorphism/banyak bentuk
/* Polymorphism
 * Sederhananya objek dapat memiliki bentuk atau implementasi 
 * yang berbeda-beda pada satu metode yang sama. Semua jenis Mail 
 * dapat mengirim pesan, namun whatsapp, email, sms tentunya memiliki 
 * cara yang berbeda dalam mengirim pesan, misalkan: whatsapp dapat mengirim
 * pesan suara sedangkan yang lainnya tidak, email dapat menyaring konten spam
 * saat mengirim pesan sedangkan yang lain tidak. Perbedaan bentuk atau cara 
 * mengirim pesan tersebut merupakan contoh dari polymorphism. */