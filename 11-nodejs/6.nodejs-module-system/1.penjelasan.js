// Modules?
// Sekumpulan kode yang dapat digunakan kembali, dengan antarmuka yang terdefinisi

// Node Modules?
// Fungsionalias yang simpel ataupun kompleks yang tersimpan didalam sebuah file 
// Javascript, yang dapat kita gunakan kembali pada aplikasi NodeJS

// NodeJS Modules
// 1. Core Modules
// 2. Local Modules (ini adalah Modules yang kita bikin sendiri contoh sederhananya adalah apa yang kita coba sebelumnya )
// 3. Third Party Modules (Modules yang dibikin oleh orang lain dan bisa kita pakai, biasa disebut juga dengan NPM Module)

// Require () 
// Fungsi Require mencari modul dengan urutan sebagai berikut :
// 1. Core Modules
// 2. Local Modules 'file atau direktori (./ atau ../)
// 3. Third party Modules Folder 'node_modules'


const fs = require('fs'); // core module
const cetakNama = require('./coba'); // Import Local module
console.log(cetakNama('Ananda'));
const moment = require('moment') // third party module / npm module

