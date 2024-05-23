 // tambahPenumpang
 // 2 parameter
    // namaPenumpang
    // array penumpang
// Rules
// jika angkot kosong, penumpang naik duduk dikursi pertama
// penumpang berikutnya duduk dikursi selanjutnya secara berurutan
// jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk dikursi kosong terlebih dahulu
// asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
// nama penumpang tidak boleh sama, untuk menghindari ketika nanti penumpang turun

var penumpang = [];

function tambahPenumpang(namaPenumpang, penumpang){

    if(penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for(i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
        }
    }

}