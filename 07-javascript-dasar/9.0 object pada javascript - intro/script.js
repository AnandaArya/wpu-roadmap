// object
// secara umum "Kumpulan nilai, yang memiliki nama"
// object adalah array, yang lebih sakti
// ada yang bilang "In Javascript, object are king. If you undestand object, you understand javascript."

// Object pada Bahasa Pemograman Lain (Meskipun namanya berbeda)
// PHP : Associative Array
// Python : Dictionaries
// Java : Hash Maps

// Kenapa Object?
// var namaMhs = 'Sandhika Galih' ;
// var umurMhs = 31;
// var lulus = true;
// var IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04];

// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for(var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// }

// var hasil = IPKumulatif(IPSemester);
// console.log(hasil);


// (2) Menggunakan array
// var mahasiswa =
// ['Ananda arya', true [2.90, 3.25, 2.88,  3.04]];

// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for(var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// }

// IPKumulatif(mahasiswa[2]);


// (3) Menggunakan Object
// var mahasiswa = {
//     nama : 'Ananda Arya',
//     lulus : true,
//     IPSemester : [2.90, 3.25, 2.88,  3.04],
//     IPKumulatif : function() {
//         var total = 0;
//         var ips = this.IPSemester;
//         for(var i = 0; i < ips.length; i++) {
//             total += ips[i];
//         }
//         return total/ips.length;
//     } 
// }

// mahasiswa.IPKumulatif();

// var Orang = {
//     nama : 'Ananda Arya', // variabel didalam object disebut properti
//     umur : 31,
//     pekerjaan : 'Pelajar',
//     sapa : function() {
//         return 'Hi, nama saya ' + this.nama + 'Usia saya ' + this.umur + 
//                 ' tahun, dan saya adalah seorang ' + this.pekerjaan;
//     }
// }

// membuat object

var mhs = {
    nama : "Ananda Arya",
    umur : 31,
    ips : [3.00, 2.50, 3.20],
    alamat : { // object didalam object
        jalan : "Jl. abc No. 123",
        kota : "Bandung",
        provinsi : "Jawa Barat"

    }
};