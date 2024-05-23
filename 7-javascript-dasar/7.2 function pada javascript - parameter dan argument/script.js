function tambah() {
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,10);
console.log(coba);


/* 
function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);
*/


/*
arguments
array yang berisi nilai yang dikirimkan saat fungsi dipanggil

function tambah() {
    return arguments;
}
var coba = tambah (5,10,20,"hi", false) ;
console.log(coba);
*/

// function tambah(a, b) {
//     var a = parseInt(prompt("Masukan nilai 1:"));
//     var b = parseInt(prompt("Masukan nilai 2:"));
//     return a + b;
    
// }

// function kali(a, b ) {
//     return a * b;
// }

// var hasil = kali(tambah(), tambah());
// console.log(hasil);

// var a = parseInt(prompt("Masukan nilai 1:"));
// var b = parseInt(prompt("Masukan nilai 2:"));

// var hasil = tambah(a * 2, b * 2);
// console.log(hasil);
