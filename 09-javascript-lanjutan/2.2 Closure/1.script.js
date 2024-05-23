
// Closure adalah sebuah function ketika memiliki akses ke parent 
// scope-nya, meskipun parent scope-nya sudah selesai dieksekusi. (w3 Schools)

// Lexical Scope
// untuk mencek closure ada atau tidak bisa mengguna console.dir();
// kenapa closure karenna membutuhkan variabel nama dari parentnya


// function init() {
//     let nama = 'Ananda'; // local variabel
//     function tampilNama() { // inner function (closure*) bisa memiliki akses ke parent variabelnya
//         console.log(nama); // akses ke parent variabel
        
//     }
//     // console.dir(tampilNama);
//     tampilNama();
// }
// init();


// Contoh Clousure (1)
// function init() {
//     function tampilNama(nama) { 
//         console.log(nama); 
//     }
//     tampilNama();
// }
// let panggilNama = init();
// panggilNama('Annada');

// contoh Clousure (2) pakai anonymous function (func tanpa nama)
// function init() {
//     return tampilNama(nama) { 
//         console.log(nama); 
//     }
// }
// let panggilNama = init();
// panggilNama('Annada');


// Kenapa Menggunakan Closure?
// Untuk Membuat Function Factories (-MDN)
// Untuk Membuat seolah Private Method(-MDN)

// contoh Factory Function 
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`)
//     }
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
// console.dir(selamatMalam);


// Kelihatannay gak ada masalah coba bayangkan program kalian udah panjang
// tapi kalian mengisi ulang counternya padahal jauh dibawah di line 100 misalnya
// sebenarnya kita bisa simpan ke dalam, tapi sekarang masalahnya setiap manggil add()
// counter di isi ulang lagi (berarti ini salah)
// cara mengatasinya menggunakan closure jadi saat 
// let add = function() {
//     let counter = 0;
//     return ++counter;
// }
// console.log(a());
// console.log(a());
// console.log(a()); 


// Closure
// Jadi seolah olah nilai counter private tidak bisa diakses dari luar tapi nilainya tetap dipertahankan
// karena dia menjadi Clousure
// let add = function() {
//     let counter = 0;
//     return function() {
//         return ++counter;
//     }
// }
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a()); 

// Ada cara lebih praktis agar tidak perlu membuat Variabel let a lagi buat nampung 
// dengan cara  immadietly invoke function
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100; // ini tidak akan menggangu functionnya
console.log(add());
console.log(add());
console.log(add()); 