<?php 

// define tidak bisa di simpan didalam class
// define('NAMA', 'Ananda Arya');
// echo NAMA;

// echo "<br>";

// // bisa dimasukan kedalam class sehingga bisa digunakan dalam konsep OOP
// const UMUR = 32;
// echo UMUR;

// class Coba {
//     const NAMA = 'Ananda Arya';
// }

// echo Coba::NAMA;


// MAGIC Constant

// echo __FILE__;

// function coba() {
//     return __FUNCTION__;
// }

// echo coba();

class Coba {
    public $kelas = __CLASS__;
}

$obj = new Coba();
echo $obj->kelas;
?>