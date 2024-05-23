// Cara untuk membuat object pada JavaScript

// 1. Object Literal

// let mahasiswa1 = {
//     nama: 'Ananda',
//     energi: 10,
// //     method adalah function yang ada di dalam object
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
        
//     }
// }

// let mahasiswa2 = {
//     nama: 'Doddy',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
        
//     }
// }


// 2. Function Declaration

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
        
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
        
//     }

//     return mahasiswa;
// }

// let ananda = Mahasiswa('Ananda', 10);
// let doddy = Mahasiswa('Doddy', 20);


// 3. Constructor FUnction
// keyword new (kalau pakai constructor func kita tidak perlu menuslikan declarasi variabel dan returnnya itu udah dibikinkan otomatis)
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
        
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
        
//     }

// }

// let ananda = new Mahasiswa('Ananda', 20);
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// }

// harus pakai new karena kalau tidak pakai new dia akan mencari func declaration
// let ananda = new Mahasiswa('Ananda', 10);



// 4. Object.create