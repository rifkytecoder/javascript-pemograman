// todo Rekursif #3
// teknik pada sebuah function yang memanggil dirinya sendiri.

// todo Rekursif
const countDown = start => {
    console.log(start);
    if (start > 0) countDown(start - 1); // ✔
};

countDown(10);  // 10 - 0


//! Konvensional
const countDowns = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while (start > 0);
};

countDown(10); // 10 - 0