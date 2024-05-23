// Membuat Object pada Javascript
// Object Literal
// Function Declaration
// Constructor Function (keyword new)
// object.create()

// Object Literal
var mhs = {
    nama : "Ananda Arya",
    nrp : "1421313",
    email : "Ananda@gmail.com",
    jurusan : "Astronomi"     
}

var mhs2 = {
    nama : "Pratama",
    nrp : "033123",
    email : "Pratama@gmail.com",
    jurusan : "Astronomi"
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nofarze', '0021311123', 'Nofaa@gmail.com', 'Teknik industri');
var mhs4 = buatObjectMahasiswa('AKUU', '222213', 'AAA@gmail.com', 'Teknik Pangan');


// Constructor (Function yang khusus digunakan untuk membuat objek)
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this ={};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this. jurusan = jurusan;
    // return this; nah perbedaannya disini dengan function declaration
}

var mhs4 = new Mahasiswa('Erik', '0311142', 'Erik@gmail.com', 'Teknik Mesin');