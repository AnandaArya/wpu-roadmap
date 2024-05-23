// Manipulasi Array


// 1. Menambah isi array

// var arr = [];
// arr[0] = "Ananda";
// arr[1] = "Arya";
// arr[2] = "Pratama";
// arr[3] = "Ar";
// arr[4] = "Ridho";

// console.log(arr); 

// 2.Menghapus isi array

// cara manual
// var arr = ["Ananda", "Arya", "Pratama"];
// arr[1] = undefined;
// console.log(arr) // elemennya sebetulnya tidak hilang tapi berubah menjadi undifined

// 3. Menampilkan isi array

// var arr = ["Ananda", "Arya", "Pratama"];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke -' + (i+1) + ': ' + arr[i]);
// }

// array method
// length (untuk mengetahui berapaj jumlah elemen pada array)
// join (menggabungkan seluruh isi array dan mengubahnya menjadi string)
// push, pop, shify, unshift (menambah menghapus dalam array )

// var arr= ["Ananda", "Arya", "Pratama", "ArRidho"];
// 1. join
// console.log(arr.join(' - '));

// 2 push & pop
// push digunakan untuk menambah elemen di elemen terakhir array
// arr.push ('Riku', 'Nofa');

// pop digunakan untuk menghapus elemen terakhir array (satu persatu dipanggi)
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// unshift menambahkan elemen pertama sebuah array
// arr.unshift('Doody');

// shift menghapus elemen pertama dari sebuah array
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice (menyambung / menyisipkan sebuah elemen ditengah tengah array)
// spilce(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ..)
// arr.splice(2, 0, 'Doody');
// console.log(arr.join(' - '));
// arr.splice(1,2, 'Dimana', 'Kemana');
// console.log(arr.join(' - '));

// 5. slice
// mengiris sebuah array menjadi array yang baru
// slice menghasilkan nilai baru jadi harus kita tampung
// slice(awal,Akhir)
// var arr= ["Ananda", "Arya", "Pratama", "ArRidho"];
// var arr2 = arr.slice(1,3); //index awal terbawa index akhir dikurangi 1 (-1)
// console.log(arr2.join(' - '));

// 6. forEach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Ananda', 'Arya', 'Pratama', 'ArRidho'];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

//menggunakan function expression di forEach
// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak);

//atau seperti ini

// angka.forEach(function(e)  {
//     console.log(e); 
// });


// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke ' + (i+1) + ' Adalah ' + e);
// });

// 7. map
// map ini mengebalikan nilai berbeda dengan forEach

// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// })

// console.log(angka2.join(' - '));



// 8. sort
// var angka = [1,2,5,3,6,8,4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - ')); // sesudah diurutkan

//tetapi harus hati - hati karena dia mengurutkan sesuai karakter
// maka harus ditambah function
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
//     return a - b;
// });
// console.log(angka.join(' - '));


// 9. filter (menghasilkan array) & find (mencari 1 nilai)
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2.join(' - '));

// find
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);

/// sebenarnya masih banyak method pada javascript bisa cek link dibawah
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array