// coba.js
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Ananda', 
    umur : 19,
    cetakMhs () {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`
    }

}

class Orang {
    // jadi constructor ini adalah method yang otomatis dijalankan, ketika Class ini di instansiasi
    constructor() {
        console.log('Objek orang telah dibuat');
    }
}

// cara ke 1 untuk melakukan export
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// cara ke 2
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

// cara ke 3 karena nama property dan valuenya sama cukup tulis satu kli
module.exports = { cetakNama, PI, mahasiswa, Orang }