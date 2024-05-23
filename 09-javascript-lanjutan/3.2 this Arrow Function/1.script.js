// Kalau kita menggunakan function declaration atau function expression didalam function memiliki konteks this
// Kalau kita mengubah function expression ke arrow function maka konteks thisnya menjadi berbeda


// Konsep this pada Arrow Function

// Construction Function
// Kalau kita membuat Constructor Function maka this didalam functionnya akan mengacu pada objeknya
// const Mahasiswa = function() {
//     this.nama = 'Ananda';
//     this.umur = 33;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.tahun} tahun`);
//     }
// }
// const Ananda = new Mahasiswa();

// Constructor Function didalamnya ada Method Arrow function
// const Mahasiswa = function() {
//     this.nama = 'Ananda';
//     this.umur = 33;
//     this.sayHello = () => {
//         // Arrow Function tidak menyimpan konsep this
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.tahun} tahun`);
//     }
// }
// const Ananda = new Mahasiswa();

// Object Literal
// const mhs = {
//     nama: 'Ananda',
//     umur: 33,
//     sayHello: () => {
//         // Maka hasilnya Nama saya undefined, dan saya undefined umur
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.tahun} tahun`);
//     }

// }


// const Mahasiswa = function() {
//     this.nama = 'Ananda';
//     this.umur = 33;
//     // Function expression tidak akan kena Hoisting
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.tahun} tahun`);
//     }

//     // Function Declaration akan kena Hoisting Sehingga pada saat thisnya di panggil maka dia akan cek di globalnya
//     //  bukan di Parent this.umur = 33 Variabelnya maka hasilnya NaN ketika di console log
//     // setInterval(function() {
//     //     console.log(this.umur++);
//     // }, 500);

//     // Maka cara mengatasinya dengan Arrow function karena tidak punya konsep this, maka dia akan mencari di Lexical scopenya
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);

// }
// const Ananda = new Mahasiswa();





