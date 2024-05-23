// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Ananda Arya';

// creating phase pada Global Context
// fase kreasi /pembentukan terjadi di context global
// apakah ada keyword var (variabel) atau function didalam kodingannya itu dulu yang dia cek
// jadi console.log belum dijalankan

// misalkan punya 10 baris ada keyword var gak ada keyword function gak kalau ada dia akan membuat nama variabel = undefine
// nama var = undefined
// nama function = fn() (isinya yang di tulis)

// meskipun variabel dan function berada di bawah maka dinaikan keatas terlebih dahulu dan ini disebut dengan hoisting


// contoh konsep hoisting misal menarik bendera maka dia akan di naikkan dulu keatas di creating phase
// javascript mendifinisikan 
// window = global object
// this = window

// var nama = 'Ananda'; // pertama di isi undefined baru di isi ananda
// console.log(nama); 

// setelah ini baru execution phase = eksekusi programmnya baris per barisdari atas ke bawah
// execution phase

// console.log(sayHello());
// var nama = 'Ananda Arya';
// var umur = 33;

// function sayHello() {
//     return (`Halo, nama saya ${nama}, saya ${umur} tahun`);
// }

//  kalau ingin melihat lebih detail konteks eksekusinya bisa googling aja JavaScript Visualizer

// kalau ketemu function seloah function membuat Local Execution Context
// yang di dalamnya terdapat creation dan exectuion phase
// nah bedayanya kalo Local Exetuion Context kita bisa akses
// Window
// arguments 
// nah didalamnya ada hoisting juga dia akan cek didalam function ada variabel gak? maka variabelnya akan di naikkan ke atas
// atau didalam function ada function lagi atau tidak? nanti dia juga melakukan hoisting, kalau ada variabel di isi dulu dengan undefined pada fase creation
// kalau sudah exectuion baru di isi dengan nilainya


// function cetakURL(username) {
//     var InstagramURL = 'http://instagram.com/'
//     return InstagramURL + username;
// }

// console.log(cetakURL(username));



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


// Studi Kasus

// function satu() {
//     var nama = 'Sandhika';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doody');
// console.log(nama);
// // hasilnya
// undefined
// Sandhika
// Erik
// Erik

