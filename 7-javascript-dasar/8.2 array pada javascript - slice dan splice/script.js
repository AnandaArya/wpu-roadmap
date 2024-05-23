//Manipulasi Array


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
//push digunakan untuk menambah elemen di elemen terakhir array
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
//slice menghasilkan nilai baru jadi harus kita tampung
// slice(awal,Akhir)
var arr= ["Ananda", "Arya", "Pratama", "ArRidho"];
var arr2 = arr.slice(1,3); //index awal terbawa index akhir dikurangi 1 (-1)
console.log(arr2.join(' - '));






