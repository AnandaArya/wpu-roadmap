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
// Dengan cara ini kita mengatasi masalah manajmen memori tapi problemnya adalah kita jadi 
// mengelola 2 buah objek
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
//         console.log(`Halo ${ this.nama}, selamat tidur`);
        
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let ananda = Mahasiswa('Ananda', 10);
// let doddy = Mahasiswa('Doddy', 20);



// Object dengan prototype inheritance(pewarisan)
function Mahasiswa(nama, energi) {
    // yg terjadi di belakang layar
    // let mahasiswa = Object.create(Mahasiswa.methodMahasiswa);
    // let mahasiswa = {};
    // secara default constructor function sudah punya parent namanya prototype
    // let this = Object.create(Mahasiswa.prototype)
    this.nama = nama;
    this.energi = energi;

}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

Mahasiswa.prototype.tidur = function(tidur) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
}

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return 'Halo ${this.nama}, selamat tidur!';
// }
let ananda = new Mahasiswa('Ananda', 10);



// versi Class
// Mirip dengan konsep Class yang memiliki inhertance atau pewarisan 
// tapi sebenarnya yang dijalanin dibelakang layar yang dijalankan object prototype diatas
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`
    }
    
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`
    }
    
    tidur(jam) {
        this.energi += jam * 2;
        return 'Halo ${this.nama}, selamat tidur!';
    }
}

let ananda = new Mahasiswa('Ananda', 10);
let doddy = new Mahasiswa('Doddy', 20);

// dengan memahami protytpe kita juga bisa pahan kalau misalnya kita menggunakan tipe data apapun
// dijavascript tipe data apapun sebenarnya adalah object

let angka = [1,2,3];
// dibelakang layar terjadi
// let angka = new Array();
// function Array() {
    // let this = object.create(Array.prototype);
// }
// 
// reverse(), sort(), method method yang ada di javascript itu dari protytype dari object array
// kalau mau ngecek tinggal tulis di console log
// Array.prototype, Object.prototype, Number.prototype
console.log(angka.reverse());



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



