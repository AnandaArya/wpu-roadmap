/* pengulangannya dihentikan oleh user
var ulang = true;
while(ulang == true) {
    console.log('Hello World');
    ulang = confirm('Coba Lagi?');
} */

/* pengulangan dihentukan oleh program
nilai awal
while(kondisi terminasi) {

    aksi

    increment (penmbahan) / decrement (pengurangan)
    terhadap nilai awal
} */

var nilaiAwal = 1;
while(nilaiAwal <= 10){
    console.log('Hello World!' + nilaiAwal + 'x');
    nilaiAwal++;
//  nilaiAwal = nilaiAwal + 1;
}