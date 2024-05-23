// 2.1 EXECUTION CONTEXT, HOSTING & SCOPE

// console.log(nama);
// var nama = "Ananda";
// ternyata tampilnya undefined dan gak error?

// Create Phase atau Fase kreasi (pembuatan) terjadi dalam konteks Global
// Creation phase pada Global Context
// Yang terjadi pada fase kreasi ini javascript akan mencari keyword var dan function dulu
// kalau ada dia akan mengisi variabelnya dengan undefined, nama var = undefined
// kalau ada function maka function diisi dengan functionnya sendiri
// nama var = undefined
// nama function = fn();
// Hoisting meskipun ditulis dibawah variabel dan function akan di naikkan dulu diatas

// Javascript mendifiniskan window = Global Object
// This = window meskipun tidak ditulis objectnya tetap ada tapi selain dari itu tidak ada
// Setelah ini baru execution phase (jadi mengeksekusi programnya dari atas ke bawah)

// EXECUTION PHASE
// Kalau ingin lebih detail lagi mengenai bagaiman javascript mengeksekusi program kita cari di google 
// javascript Visualizer
// console.log(sayHello());
// var nama = 'Ananda';
// var umur = 33;

// function sayHello() {
//     return (`Halo, nama saya ${nama}, saya ${umur} tahun.`);

// }

// Kalau ketemu function eksekusinya udah gak global lagi
// function membuat Local Execution Context
// yang didalamnya terdapat creation dan executin Phase
// kita punya akses ke window dan argument
// maka dia melakukan hoisting juga

// var nama = 'Ananda Arya';
// var username = '@anandaarya';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));
// intinya setiap function dipanggil maka akan membuat exectuion context baru dan ditambahkan execution stack
// dan setelah functionnya selesai dijalankan maka executionnya akan dihilangkan di memory


// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
            
//         }
//         c();
//     }

//     b();
// }

// a();