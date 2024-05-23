var item = prompt('Masukan nama makanan / minimuman : \n (contoh: nasi, daging, susu, hamburger, softdrink');

switch(item) {
    case 'nasi': 
    case 'daging':
    case 'susu':
        alert('makanan / minuman sehat');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman yang tidak sehat');
        break;
    default:
        alert('Silahkan masukan yang ada didaftar');
        break;
}

/* (3) 
var item = prompt('Masukan nama makanan / minimuman : \n (contoh: nasi, daging, susu, hamburger, softdrink');

switch(item) {
    case 'nasi':
        alert('Nasi adalah makanan sehat');
        break; //apabila kita tidak menggunakan break maka dia akan menjalankan case selanjutnya
    case 'daging':
        alert('Daging adalah makanan sehat');
        break;
    case 'susu':
        alert('Susu adalah minuman sehat');
        break;
    case 'hamburger':
        alert('Hamburger adalah makanan tidak sehat');
        break;
    case 'softdrink':
        alert('Softdrink adalah minuman yang tidak sehat');
        break;
    default:
        alert('Silahkan masukan yang ada didaftar');
        break;
} */




/* (3)
 var angka = prompt('Masukan angka');

switch(angka) {
    case '1':
        alert('Anda memasukan angka 1');
        break;
    case '2':
        alert('Anda memasukan angka 2');
        break;
    case '3':
        alert('Anda memasukan angka 3');
        break;
    default:
        alert('Yang anda masukan bukan angka');
        break;

} 
*/

/* (2) 
Mengapa jika dimasukan angka malah yang tampil adalah else?
   karena apapun yang kita masukan di prompt maka tipe datanya berubah menjadi string
var angka = prompt('Masukan angka');
if(angka === 1) {
    alert('Anda Memasukan angka 1');
} else if(angka === 2) {
    alert('Anda memasukan angka 2');
} else if(angka === 3) {
    alert('Anda Memasukan angka 3')
} else {
    alert('Yang anda masukan bukan angka');
}

    (1)
ini cara mengkonversi agar tipe data string berubah menjadi integer
var angka = parseInt(prompt('Masukan angka'));
if(angka === 1) {
    alert('Anda Memasukan angka 1');
} else if(angka === 2) {
    alert('Anda memasukan angka 2');
} else if(angka === 3) {
    alert('Anda Memasukan angka 3')
} else {
    alert('Yang anda masukan bukan angka');
}
*/