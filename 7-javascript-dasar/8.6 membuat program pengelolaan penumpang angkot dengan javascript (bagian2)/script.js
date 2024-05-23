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

var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if(penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array
        return penumpang;
    } else {
        // teluuri seluruh kursi dari awal
        for(i = 0; i <penumpang.length; i++) {
            // jika ada kuri kosong
            if(penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembaikan isi array & keluar dari function 
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang [i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' Sudah ada didalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;   
            }
            //jika seluruh kursi terisi 
            else if(i == penumpang.length -1) {
                //tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }

    }
}

// hapusPenumpang()
// 2 parameter
    // namaPenumpang
    // array penumpang
//Rules
// jika angkot kosong, tampilkan pesan bahwa angkotnya kosong
// jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array
// dengan memberi nilai undefined
// jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya

var penumpang = [];
var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log('Angkot masih kosong')

        return penumpang;
    }
    else {
        for(var i = 0; i < penumpang.length; i++) {
            if(namaPenumpang == penumpang [i]) {
                penumpang [i] = undefined;

                return penumpang;
            } else if(i == penumpang.length -1) { // bisa juga namaPenumpang != penumpang
                console.log(namaPenumpang + 'Nama Penumpang tidak sesuai');
                return penumpang;
            }
        }
    }
}