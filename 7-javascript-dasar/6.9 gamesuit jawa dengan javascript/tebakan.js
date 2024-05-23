

var hasil = '';
var tampil = '';

var tanya = true;
while(tanya) {


var comp = Math.floor(Math.random() * 10) + 1;
alert('Selamat datang di game tebak angka anda mmepunyai 3 kesempatan untuk menjawab');
var i = 3;

while(i > 0) {
    var user = prompt('Kesempatan' + i + '\n Masukan Pilihan Angka: (1-10)');
    if(user == comp) {
        hasil = 'Tebakan Benar';
        i = false;
        alert('Angka anda :' + user + 'Dan Computer :' + comp);
    } else if(user < comp) {
        hasil = 'Tebakan terlalu kecil';
    } else {
        hasil = 'Tebakan terlalu besar';
    }

    if(i > 1) {
        alert('Hasilnya :' + hasil + 'Anda masih punya ' + (i-1)+' x kesempatan, silahkan tebak lagi');
    }
    if(i == 1){
        alert('Anda Kalah, Angka Acak' + comp);
    }
    i--;
}
    tanya = confirm('Main Lagi?');
}


/*
i = 3
 4 < 9
 hasil = tebakan terlalu kecil

 3 > 1
alert ('Hasil Anda :' Terbakan terlalu kecil + (3-1) + x kesempantan lagi)

i = 2
1 < 9 
alert ('Hasil Anda :' Terbakan terlalu kecil + (2-1) + x kesempantan lagi)


*/



 

    
alert('Tebakan anda benar '+ hasil);


