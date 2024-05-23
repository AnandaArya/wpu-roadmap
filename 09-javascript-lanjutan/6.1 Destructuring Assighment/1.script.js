// Destructuring Assignment
// "Expression pada Javascript yang membuat kita dapat membongkar nilai dari array
// atau properti dari object kedalam variabel yang terpisah"-MDN WEB Docs


// Array
// const coba = ['satu', 'dua', 'tiga'];
// const [a, b, c] = coba;
// console.log(a); // "satu"
// console.log(b); // "dua"
// console.log(c); // "tiga"

// const mhs = {
//     nama: 'Ananda Arya',
//     umur: 18,
//     email: 'ananda@gmail.com'
// };

// const {nama, umur, email} = mhs;
// console.log(nama); // "Ananda Arya"
// console.log(umur); // 33
// console.log(email); // "ananda@gmail.com"



// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Ananda Arya'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// ini Akan di unpack atau dibongkar
// const perkenalan = ['Halo', 'nama', 'saya', 'Ananda Arya'];
// // const [salam, satu, dua, nama] = perkenalan;
// // Skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);


// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a,  b] = coba();
// console.log(a);


// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);



// Destructuring Object
// const mhs = {
//     nama: 'Ananda Arya',
//     umur: 33
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Ananda Arya',
//     umur: 33
// });
// console.log(nama);


// Assign ke variabel baru
// const mhs = {
//     nama: 'Ananda Arya',
//     umur: 33
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);


// Memberikan nilai Default Value
// const mhs = {
//     nama: 'Ananda Arya', 
//     umur: 33,
//     email: 'ananda@gmail.com'
// }

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);



// Memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Ananda Arya', 
//     umur: 33,
//     email: 'ananda@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);


// Rest Parameter
// const mhs = {
//     nama: 'Ananda Arya', 
//     umur: 33,
//     email: 'ananda@gmail.com'
// }

// const {nama, ...values} = mhs;
// console.log(values);



// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Ananda Arya', 
    umur: 33,
    email: 'ananda@gmail.com'
}

function getIdMhs({id}) {
    return id;
}

console.log(getIdMhs(mhs));






