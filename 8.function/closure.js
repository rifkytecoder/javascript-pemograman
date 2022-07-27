// todo Closure
// fungsi yang dapat mengakses variabel di dalam lexical scope-nya 
// Lexical scope berarti pada sebuah fungsi bersarang, 
// fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.

function init() {
    // var local
    var name = 'shank';

    // inner function/ closure
    function greet() {
        console.log(`Halo, Yonkou ${name}`);
    }

    greet();
}

init();