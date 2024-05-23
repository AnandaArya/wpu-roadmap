// High Order Function?
// Function yang beroperasi pada function yang lain, baik itu digunakan 
// dalam argument, maupun sebagai return value - https://eloquentjavascript.net

// Didalam javascript sebuah Function itu disebut dengan First Class Function 
// "Javascript memperlakukan function sebagai object. -sitepoint.com"

// Contoh Higher Order Function 
// Function yang kita simpan sebagai argument disebut dengan Callback
// Sedangkan function yang memiliki argument sebagai Callback disebut dengan Higher Order Function
// 1. Contoh pertama Higher Order Function
// function kerjakanTugas(matakuliah, selesai) { //selesai nya disebut dengan callback
//     console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
//     selesai();
// }
// function selesai() {
//     alert('Selesai mengerjakan tugas');
// }
// kerjakanTugas('Pemrograman Web', selesai);

// 2. Contoh kedua
// setTimeout(function() {
//     console.log('Hello World');
// }, 1000);

// 3. Contoh Higher Order Function
// const tombol = document.querySelector('.submit');
// tombol.addEventListener('click', function() {
// console.log('tombol ditekan !');    
// });

// 4. Contoh Higher Order Function karena didalamnya memiliki return value yang juga function
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }
// let selamatMalam = ucapkanSalam('Malam');
// console.dir(selamatMalam('Ananda');)


// Kenapa menggunakan Higher Order Function? kenapa gak bikin function biasa aja
// 1. Alasan pertama abstraksi (agar lebih sederhana atau lebih simpel)
//    "Semakin besar sebuah program, semakin tinggi, kompleksitasnya,
//     semakin membingungkan programmernya - eloquentjavascript.net"

// "Ada dua cara untung merancang sebuah software: cara pertama adalah membuat
//  Programnya se-sederhana mungkin sehingga jelas tidak ada kekurangannya dan 
//  cara lainnya dalah untuk membuat programnya se-kompleks mungkin sehingga
//  tidak ada kekurangan yang jelas" -C.A.R.Hoare, 1980 ACM Turning Award Lecture

// Contoh agar lebih efektif atau sederhana
function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(10, console.log);
repeat(3, alert);

// Contoh Higher Order Function yang sering digunakan
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()