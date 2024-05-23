var jmlAngkot = 10;
var angkotBeroperasi = 6;
for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    } else if(noAngkot === 8 || noAngkot === 9) { 
        console.log('Angkot No. ' + noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi');
    }
}

/* var jmlAngkot = 10;
var angkotBeroperasi = 6;
for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    } else if(noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' Sedang Lembur');
    } else if(noAngkot === 10) {
        console.log('Angkot No. ' + noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi');
    }
} */


