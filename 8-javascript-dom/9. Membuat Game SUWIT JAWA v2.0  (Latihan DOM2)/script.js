var tanya = true;
while(tanya) {
    // Menangkap pilihan player
    var p = prompt ('pilih : gajah, semut, orang');

    //menagnkap piihan computer 
    //membangkitakn bilangan random
    var comp = Math.random();


    if(comp < 0.34 ) {
        comp = 'gajah';
    } else if(comp >= 0.34 && comp <= 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    //menentukan rules
    var hasil = '';
    if(p == comp) {
        hasil = 'seri';
    } else if(p == 'gajah') {
        // if(comp == 'orang') {
        //     hasil = 'menang';
        // } else{
        //     hasil = 'kalah';
        // }
        hasil = (comp == 'orang')? 'MENANG' : 'KALAH';
    } else if(p == 'orang') {
        hasil = (comp == 'gajah')? 'KALAH' : 'MENANG';    
    } else if(p == 'semut') {
        hasil = (comp == 'orang')? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }

    //tampilan hasilnya 
    alert('Kamu memilih: ' + p + '\n Komputer memilih: ' + comp + '\n maka hasilnya Kamu: ' + hasil);
    tanya = confirm('Coba Lagi?');
}
alert('Terimakasih sudah bermain');

