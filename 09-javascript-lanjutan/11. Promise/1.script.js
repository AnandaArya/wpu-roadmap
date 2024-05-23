// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=f6eb8859&s=avengers',
//     success: movies => console.log(movies)
// });

// Kalau kita tidak mau menggunakan Libary Jquery ini versi dari AJAX dari Vanilla JS
// saat ini ada diJavascript Modern ada cara yang lebih simple dari pada menulis  Objecy AJAX seperti dibawah
// Yaitu menggunakan Fetch
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=f6eb8859&s=avengers');
// xhr.send();


// Fetch
                                                            //   (  Callback    )
fetch('http://www.omdbapi.com/?apikey=f6eb8859&s=avengers').then(console.log(response => response.json()));
// Fetch mengembalikan Promise
// Promise artinya adalah janji
// Adalah sebuah Object yang mereprensentasikan keberhasilan atau kegagalan sebuah event
// yang Asychronous di masa yang akan datang
// janji    (terpenuhi / ingkar)
// states   (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi     (then / catch)


// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji..');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));


// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // biar pending yang terlihat
// console.log(janji2.then(() => console.log(janji2)));
// finally biasa digunakan untuk menambahkan animasi loading, jadi pad asaat mulai jalan promisenya
// jalanin animasi loading, begitu fianlly matikan animasi loadingnya
// janji2
//     .finally(() => console.log('selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');


// Promise.all();
// ketika punya banyak promise mau dijalankan sekaligus
// contoh kita akan konek kedua API yang berbeda, API pertama untuk ngambil data film

// const film = new Promise(resolve => {
//     setTimeout(() => {
//         // misal kita dapetin datanya berupa json / array of object
//         resolve([{
//             judul: 'Avengers',
//             sutradara: 'Ananda Arya',
//             pemeran: 'Doddy, Erik'
//         }]);
//     }, 1000);
// });

// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Bandung',wan'
//         }])
//     }, 500);
//             temp: 26,
//             kondisi: 'Cerah Bera
// });

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// kalau kita mau menjalankan sekaligus
Promise.all([film, cuaca])
    // .then(response => console.log(response));
    // Kalau kita ingin memecahnya menjadi array yang berbeda bisa menggunkan spread operator
    .then(response => {
        const[film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });




