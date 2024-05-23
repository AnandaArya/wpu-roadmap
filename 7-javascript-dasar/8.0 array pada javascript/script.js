//array adalah tipe data yang sama di gunakan untuk sekumpulan (nilai atau variabel) yang digunakan untuk tujuan yang sama
//array adalah variabel yang lebih sakti = karena bisa menampung lebih dari satu
//array Variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama

//dijavascript array adalah object
var hari = ['Senin', 'Selasa', 'Rabu']; 
//atau seperti ini dideklarasikan dahulu
var binatang = [];
binatang = ['Kucing', 'Kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];

console.log(binatang[4]);

var hari = ['Senin', 'Selsasa', 'Rabu'];

//elemen pada array boleh memiliki tipe data yang berbeda di javascript
// dibawah contoh array multidimensi(didalam array ada array/ array bersarang)
var myArr3 = ['teks', 2, false, myFunc, [4,5,6]];
console.log(myArr3[4] [1]); //maka nilai yang ditampilkan adalah lima
var myArr3 