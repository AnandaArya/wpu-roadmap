<?php
// Pertemuan 2 - PHP Dasar
// Sintaks PHP

// Standard Output
// echo, print
// print_r biasa dipakai untuk debugging
// var_dump biasa dipakai untuk debugging
// vardump tipe datanya apa, panjang stringnya + spasinya
// var_dump("Ananda Arya");


//  Penulisan sintaks PHP
// 1. PHP di dalam HTML
// 2. HTML di dalam PHP

// Variabel dan Tipe Data
// Variabel tidak boleh diawali dengan angka, tapi boleh mengandung angka
// $nama = "Ananda Arya";

// echo "Halo, nama saya $nama";

//  Operator
//  aritmatika
// + - + / %
// $x = 10;
// $y = 20;
// echo $x + $y;

// penggabung string / concatenation / concat / kalau diJavascript + diPHP .
// $nama_depan = "Ananda Arya";
// $nama_belakang = "Pratama Ar Ridho";
// echo $nama_depan . " ". $nama_belakang;

// Assignment
//  =,  +=, -=, /=, %=, .=
// $x = 1;
// $x += 5;
// echo $x;

// $nama = "Ananda";
// $nama .= " ";
// $nama .= "Pratama";
// echo $nama;

// Perbandingan
// <, >, <=, >= ==, !=

// identitas
// ===, !==
// var_dump(1 === "1");

//  Logika
// &&, ||, !

$x = 10;
var_dump($x < 5 && $x % 2 == 0);

?>




