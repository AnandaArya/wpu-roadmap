<?php

// $mahasiswa = [
//     [
//     "nama" => "Yudha",
//     "nrp" => "12345",
//     "email" => "yudha@gmail.com"
//     ],
//     [
//         "nama" => "Rifqi",
//         "nrp" => "54321",
//         "email" => "rifqi@gmail.com"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '123');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);



$data = json_encode($mahasiswa);
echo $data;

?>