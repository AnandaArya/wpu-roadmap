// Looping baru pada Modern Javascript
// for..of
// for..in


// for..of
// "Creates a loop iterating over iterable Object -MDN"
// String
// Array
// Arguments / NodeList (Array adalah argument untuk menampung nilai pada function, sementara NodeList adalah saat kita melakukan DOM)
// TypedArray
// Map
// Set
// User-defined Iterables



// For biasa untuk Array
// const mhs = ['Ananda', 'Doddy', 'Erik'];
// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
    
// }

// forEach
// const mhs = ['Ananda', 'Doddy', 'Erik'];
// mhs.forEach(m => console.log(m)); 

// for..of
// const mhs = ['Ananda', 'Doddy', 'Erik'];
// for(const m of mhs) {
//     console.log(m);
// }


// String
// const nama = 'Ananda';
// for(const n of nama) {
//     console.log(n);
// }

// const mhs = ['Ananda', 'Doddy', 'Erik'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`)
// }); 

// for..of secara default tidak ada index
// cara ngakalinnya menggunakan method yang namanya entires 
// const mhs = ['Ananda', 'Doddy', 'Erik'];
// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`)
// }



// NodeList
const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.textContent));
// for..of
// for(n of liNama) {
//     console.log(n.innerHTML);
    
// }


// arguments
// secara default kalau kita tidak menuliskan parameter maka nilai argumenya akan tersimpan
// kedalam sebuah (arguments) di Javascript
// function jumlahkanAngka() {
//     // tidak bisa pakai reduce
//     // return arguments.reduce((a, i) => a + i);
//     // tidak bisa pakai forEach karna bukan Array
//     let jumlah = 0;
//     // return arguments.forEach(a => jumlah += a);
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// for..in
// Creates a loop only iterating over enumerable
// Enurable disini adalah properti pada Object

// for..in
const mhs = {
    nama: 'Ananda',
    umur: 18,
    email: 'ananda@gmail.com'
}

for(m in mhs) {
    console.log(m);
    // console.log(mhs[m]);
    
}





