// todo Overriding Method
/* teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak)
   pada sebuah method ataupun constructor yang dimiliki oleh parent class. 
   Sehingga, ia dapat disesuaikan dengan behavior di child class. */

// Class Induk/Parent
class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }

    showAllContacts() {
        return this._contacts;
    }

}

// todo Overriding Constructor
class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        // agar bisa mengakses method dari induk
        super(phoneNumber); // overriding constructor
        this.username = username; //child
        this.isBussinessAccount = isBussinessAccount; //child
    }

    // method child
    sendMessage(msg, to) {
        // agar bisa mengakses method dari induk
        super.sendMessage(msg, to); // overriding method
        console.log('Send by WA'); // child
    }
}

const wa1 = new WhatsApp('Onepiece', true, '087777777');

wa1.sendMessage('Induk', '08666666'); // Send by Wa
console.log(wa1.from); //6281111111

//? super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.
//? super.methodName(...) digunakan untuk memanggil parent method.

//! jika tidak ingin memanggil dari Parent/Induk tidak perlu pake "super".!!!