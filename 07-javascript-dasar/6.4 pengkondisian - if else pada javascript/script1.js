/* var angka = 1;
if(angka === 1) {
    alert('Anda memasukan angka 1');
} */

/* var angka = 2;
if (angka < 5){
    alert(angka + ' Lebih kecil dari 5');
} */

/* var angka = 2;
if(angka % 2 === 0) {
    alert(angka + ' Adalah bilangan genap');
} else {
    alert(angka + ' Bilangan ganjil')
} */

var angka = prompt('Masukan Angka');
if (angka % 2 == 0) {
    alert(angka + ' Adalah angka bilangan genap');
} else if (angka % 2 == 1) {
    alert(angka + ' Adalah bilangan ganjil');
}

else{
    alert('Masukan salah');
}