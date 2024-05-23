const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3;
// menggunakan for 
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// Menggunakan filter
// const newAngka = angka.filter(function(a) {
//     return a >= 3;
// });
// console.log(newAngka);

// Menggunakan filter & Arrow function karena parameternya cuma 1 gak perlu pakai tanda kurung
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// menggunnakan map berarti kita memetakan setiap elemen yang ada arraynya menggunakan array (function) yang baru
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// melakukan sesuatu terhadap seluruh elemen pada arraynya
// jumlahkan seluruh elemen pada array

// reduce punya 2 argument karena punya 2 argumen harus dikasih kurung lagi
// parameternyaadalah accumulator, currentValue
// accumulator = hasil dari prosesnya
// currentValue = elemen array yang ada diloopingnya
// + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 +  2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator * currentValue);
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 +  2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5); // ada nilai awal di akhrinya defaultnya adalah 0
// console.log(newAngka);


// Method Chaining kita bisa menggabungkan fungsi-fungsi pada Higher Order Function ini dalam satu kali eksekusi
// Mencari angka > 5
// Hasilnya Kalikan 3
// Lalu jumlahakan
                          //8,9,9            24, 27, 27                 24 + 27 + 27 = 78
const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((acc, cur) => acc + cur); 
console.log(hasil);

        

