//Rekursif adalah sebuah fungsi (function) yang memanggil dirinya sendiri 
// untuk menggunakan rekursif harus ada kondisi berhenti yang disebut Base Case
//Base kondisi akhir dari rekursfid yang menghasilkan nilai
//Contoh klasik yang biasa digunakan dalam rekursif adalah faktorial
// 5 faktorial = 5 x 4 x 3 x 2 x 1
// Implementasi Rekursif
// menggantikan looping, fibonacci, pencarian dan penelusuran pada struktur adta list dan tree



//(1)
// function tampilAngka(n){
//     if(n === 0) { //Base Case kondisi akhir(berhenti) yang menghasilkan sebuah nilai
//         return;
        
//     }
//     console.log(n);
//      return tampilAngka(n-1);
// }

// tampilAngka(10);

//(2)
// function ulang(n) {
//     if (n === 100) {
//         return;
//     }
//     console.log(n);
//     return ulang(n+1);
// }
// ulang(1);

// (3)
function faktorial(n) {
    if (n == 0) return 1;
    return n * faktorial (n-1);
}

console.log(faktorial(5));





