<?php 
// json_decode = mengubah json menjadi array kalau ingin menjadi array assoc maka param ke 2 true

$data = file_get_contents('coba.json');
$mahasiswa = json_decode($data, true);

var_dump($mahasiswa);
echo $mahasiswa[0]["pembimbing"]["pembimbing1"];
?>