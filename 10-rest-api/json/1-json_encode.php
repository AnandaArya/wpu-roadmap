<?php 

// json_encode adalah mengubah object atau array ke json sementaara decode kebalikannya

// contoh mengubah array ke json
// $mahasiswa = [
//     [
//         "nama" => "Ananda Arya",
//         "nrp" => "123123123",
//         "email" => "ananda@gmail.com"
//     ],
//     [
//         "nama" => "Erik Seha",
//         "nrp" => "123123123",
//         "email" => "erik@gmail.com"
//     ]
// ];

// $data = json_encode($mahasiswa);
// echo $data;

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '123');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;





?>