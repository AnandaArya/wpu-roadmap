// Core Module
// File System

const fs = require('fs');


// Menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara syncrhonous!');
// } catch(e) {
//     console.log(e);
    
// }

// Menuliskan string ke file (Asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronous', (e) => {
//     console.log(e);
// })

// // Membaca isi file (Synchronous)
// 1. Cara pertama
// const data = fs.readFileSync('data/test.txt');
// // yang tampil adalah isi buffernya bukan stringnya, jadi harus kita konversi dulu
// console.log(data.toString());

// 2. Cara kedua
// Atau kita tambahkan di parameter kedua hasilnya mau dalam bentuk apa
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);


// membaca isi file (ASynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


// Readline
const readline = require('readline');
const { json } = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan nama anda : ', (nama) => {
    rl.question('Masukan no telp anda : ', (noHP) => {
        const contact = { nama, noHP };

        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

        console.log('Terimakasih telah memasukan data');

        rl.close();
    });
});


