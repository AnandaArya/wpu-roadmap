// console.log('Hello WPU');
// untuk menajalankannya cukup tulis node namaFile.js
// tapi khusus untuk File Index dia secara otomatis bisa jadi root (file utama)
// jadi cukup tulis node .

// const nama = 'Ananda Arya';
// console.log(nama);
// // node index

// const cetakNama = (nama) => `Hi, nama saya ${nama} `;
// console.log(cetakNama('Ananda Arya'));
// // node index

// bagaimana caranya kita ingin menjalankan file index tapi juga file coba?
// kita bisa menggunakan require() 

// require('./coba');
// console.log('Hello WPU');
// llau kita coba jalanan dengan perintah node .
// hasilnya
// Hello World (coba.js)
// Hello WPU (index.js)

// misal dibawah ini file 
// coba.js
// function cetakNama(nama) {
//     return `Halo, nama saya ${nama}`;
// }

// index.js
// require('./coba');
// cetakNama('Ananda');

// hasilnya
// ReferenceError: cetakNama is not defined ??
// kenapa demikian padahal kita sudah memannggil file coba.js dengan require,
// karena NodeJS menganut sesuatu yang disebut dengan System Module,  jadi dia menanggap satu file
// itu satu module sendiri, apa yang ada dimodule satu tidak bisa diakses begitu saja di modul yang lain

// nah kita perlu satu keyword lagi yang harus kita tulis di file coba.js yaitu "export"

// coba.js
// function cetakNama(nama) {
//     return `Halo, nama saya ${nama}`;
// }
// module.exports = cetakNama;

// index.js
const cetakNama = require('./coba');
console.log(cetakNama('Ananda'));

// hasilnya
// Halo, nama saya Ananda