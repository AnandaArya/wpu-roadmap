<?php 
// $mahasiswa = [
//     ["Ananda Arya", "043040023", "ananda@gmail.com", "Teknik Informatika"],
//     ["Pratama", "4212345", "pratama@gmail.com", "Teknik Industri"]
// ];

// Array Associative
// definisinya sama seperti array numerik, kecuali
// key-nya adalah string yang kita buat sendiri
// kalau numerik urutannya yang penting
$mahasiswa =[
    [
    "nrp" => "043040023",
    "nama" => "Ananda Arya", 
    "email" => "ananda@gmail.com",
    "jurusan" => "Teknik Informatika",
    "gambar" => "1.jpg"
    ],
    [
    "nama" => "Doody Ferdiansyah", 
    "nrp" => "043040001",
    "email" => "doody@gmail.com",
    "jurusan" => "Teknik Industri",
    "gambar" => "2.jpg"

    ]
];
echo $mahasiswa[1]["tugas"][1];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <h1>Daftar Mahasiswa</h1>

    <?php foreach($mahasiswa as $mhs) : ?>
    <ul>
        <li>
            <img src="img/<?= $mhs["gambar"]; ?>">
        </li>
        <li>Nama: <?= $mhs["nama"]; ?></li>
        <li>Nrp: <?= $mhs["nrp"]; ?></li>
        <li>Email: <?= $mhs["jurusan"]; ?></li>
        <li>Jurusan: <?= $mhs["email"]; ?></li>
    </ul>
    <?php endforeach; ?>
</body>
</html>