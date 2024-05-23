// Cara untuk membuat object pada JavaScript

// 1. Object Literal
// PROBLEM: tidak efektiv untuk object yang banyak
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
// dalam func Declaration Ternyata di belakang layar 2 objek ini tetap dibuat mau dipakai atau enggak 
// akan disimpan didalam memori ini akan bermasalah di memory
// Cara mengatasinya seperti di bawah

const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
        
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main!`);
        
    },

    // tapi problemnya ketika ada method baru maka harus meinstansiasi (mendaftarkan) ulang
    // Artinya kita mengelola 2 object sekarang secara manajemen memori efektif tapi ada kekuranganya
    // kita harus mendaftarkan ulang dan sebaliknya 
    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
        
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;
    mahasiswa.tidur = methodMahasiswa.tidur;
    

    return mahasiswa;
}

let ananda = Mahasiswa('Ananda', 10);


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



// 4. Object.create ada di 1.3