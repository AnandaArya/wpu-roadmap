// Cara membuat Function
// 1. Function Declaration
// function tampilPesan(nama) {
//     alert ('halo' + nama);
// }  
// tampilPesan('Ananda');

// 2. Function Expression disimpan dulu kedalam variabel
// const tampilNama = function(nama) {
//     return `Halo, ${nama}';`
// }
// console.log(tampilNama('Ananda'));


// 3. Arrow Function
// Bentuk lain yang lebih ringkas dari Function Expression -MDN
// Parameter satu tidak perlu pakai kurung
// let tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log('Ananda Arya');
// Parameter 2 harus pakai kurung
// let tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));

// kalau parameternya satu tidak perlu pakai kurung
// kalau isinya return aja maka tidak perlu di tulis juga
// bahkan tidak perlu kurung kurawalnya ini disebut dengan implisit return
// const tampilNama = nama => `Halo, ${nama}`; 
// console.log('Ananda Arya');

// kalau tidak ada parameternya maka harus ditulis tanda kurungnya ()
// const tampilNama = () => `Hello World`;


// Contoh lain dari Arrow function menggunakan function map pada javascript untuk memetakan 
// sebuah function kedalam sebuah Array misalnya. jadi kita ingin menghitung jumlah huruf dari
// masing masing mahasiswa lalu jumlah hurufnya mau di simpan kedalam sebuah array lagi

let mahasiswa = ['Ananda Arya', 'Doddy Ferdiansyah', 'Erik'];

// masing-masing elemen arraynya kita anggap sebagai nama
// 1. Dengan function expression
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// console.log(jumlahHuruf);
// });

// 2. dengan Arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// 3. Kalau kita ingin mengembalikannnya dalam bentuk objek bukan array lagi
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlhHuruf: nama.length}));
// di Javascript versi baru sekarang kalau kita ingin mengembalikan objek yang propertynya sama dengan nilainya cukup tulis nama aja
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlhHuruf: nama.length}));
// console.log(jumlahHuruf);
console.table(jumlahHuruf); // tampil lebih rapi




