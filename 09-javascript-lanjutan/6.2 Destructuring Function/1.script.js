// Destructuring

// function penjumalahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// // tanpa menggunakan Destructuring
// // const jumlah = penjumalahanPerkalian(2, 3)[0];
// // const kali = penjumalahanPerkalian(2, 3)[1];


// // Menggunakan Destructuring
// const [jumlah, kali] = penjumalahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);



// Urutan sangat berpengaruh
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b];
// }


// // Menggunakan Destructuring
// const [tambah, kurang, jumlah, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(bagi);

// Kalau ingin urutan tidak berpengaruh maka return valuenya adalah Object
// dia sudah terasosiasi dengan nama propertinya
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a/ b,
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang);


// Destructuring function arguments


// Tanpa Destructuring
// const mhs1 = {
//     nama: 'Ananda Arya',
//     umur: 18,
//     email: 'ananda@gmail.com'
// }

// function cetakMhs(nama, umur) {
//     return  `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`
// }

// Tanpa Destructuring
// Cara lain bisa nilai argumen yang dikirim adalah Object
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// const mhs1 = {
//     nama: 'Ananda Arya',
//     umur: 18,
//     email: 'ananda@gmail.com'
// }

// function cetakMhs(mhs) {
//     return  `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`
// }
// console.log(cetakMhs(mhs1));



// Menggunakan Destructuring
// Akan sangat terpakai apabila Objectnya Kompleks
// const mhs1 = {
//     nama: 'Ananda Arya',
//     umur: 18,
//     email: 'ananda@gmail.com'
// }

// function cetakMhs({nama, umur}) {
//     return  `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`
// }
// console.log(cetakMhs(mhs1));


// Contoh objectnya Kompleks object ada properti yang nilainya object juga
// Destructuring arguments
// const mhs1 = {
//     nama: 'Ananda Arya',
//     umur: 18,
//     email: 'ananda@gmail.com',
//     nilai: {
//         tugas: 80,
//         uas: 85,
//         uts: 75
//     }
// }

// function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
//     return  `Halo, nama saya ${nama}, saya berumur ${umur} tahun., dan nilai uas saya adalah. ${uas}`
// }

// console.log(cetakMhs(mhs1));

