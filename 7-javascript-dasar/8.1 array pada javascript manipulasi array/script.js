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

var arr= ["Ananda", "Arya", "Pratama"];
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
console.log(arr.join(' - '));



