var jmlAngkot = 10;
var angkotBeroperasi = 6;
for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= 6 && noAngkot !== 5 && noAngkot != 4) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    } else if(noAngkot === 8 || noAngkot === 9 || noAngkot === 5 || noAngkot === 4) { 
        console.log('Angkot No. ' + noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi');
    }
}

