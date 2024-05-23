var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= 10; noAngkot++) {
    console.log('Angkot no. ' + noAngkot + ' Sedang tidak beroperasi');
}