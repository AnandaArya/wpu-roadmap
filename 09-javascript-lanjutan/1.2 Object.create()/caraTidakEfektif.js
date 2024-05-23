// Cara untuk membuat object pada JavaScript

// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: "Ananda", 
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     } 
// }

// let mahasiswa2 = {
//     nama: "Doddy", 
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     } 
// }

// 2. Function Declaration

const methodMahasiswa = {
    makan : function(porsi) {
                this.energi += porsi;
                console.log(`Halo ${this.nama}, selamat makan!`);
                
            },
        
    main : function(jam) {
                this.energi -= jam;
                console.log(`Halo ${this.nama}, selamat main!`);
                
            }
};




// Artinya kita mengelola dua objek sekarang
// objek yang dibikin menggunakan func declaration
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
        
//     }
//      return mahasiswa;
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let ananda = Mahasiswa('Ananda', 10);
// let doddy = Mahasiswa('Doddy', 20);


// 3. Constructor FUnction
// keyword new
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

// let ananda = new Mahasiswa('Ananda', 10);



// 4. Object.create