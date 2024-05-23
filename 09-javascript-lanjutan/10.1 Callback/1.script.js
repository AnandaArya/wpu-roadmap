// Callback
// "Function yang dikirimkan sebagai parameter pada function yang lain. -MDN"
// "Function yang dieksekusi setelah funcion lain setelah dijalankan -codeburst.io"


// Callback
// Synchronous Callback
// Contoh 1
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }
// function tampilKanPesan(callback) {
//     const nama = prompt('Masukan Nama :');
//     callback(nama);
// }
// tampilKanPesan(halo);

// Contoh 2
// function tampilKanPesan(callback) {
//     const nama = prompt('Masukan Nama :');
//     callback(nama);
// }
// tampilKanPesan(nama => {
//     alert(`Halo, ${nama}`);
// });

// const mhs = [
//     {
//         "nama": "Ananda Arya",
//         "nrp" : "043040020",
//         "email" : "ananda@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 1 
//     },
//     {
//         "nama": "Doddy Ferdiansyah",
//         "nrp" : "043040123",
//         "email" : "doddy@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 2 
//     },
//     {
//         "nama": "Erik",
//         "nrp" : "104040001",
//         "email" : "erik@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 3 
//     }
// ];

// Kebayang kalau datanya banyak dan kita request sangat lama jadi gak selesai selesai
// karena dia Synchronous atau Blocking
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 100000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');


// Asynchronous Callback (bedanya dengan diatas adalah ini sudah Asynchronous)
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// function success() {

// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');


// Menggunakan JQuery (sudah Anyschronous)
// console.log('mulai');
// $.ajax({
//     url: 'mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
        
//     }

// });
// console.log('selesai');


