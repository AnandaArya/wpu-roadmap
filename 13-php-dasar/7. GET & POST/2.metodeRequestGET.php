<?php 
// $_GET
// data di kirim menggunakan metode request GET akan di tangkap oleh variabel Superglobals GET
// cara mengirimkan data menggunakan metode request GET 
// contoh latihan.php?nama="arya"
// var_dump($_GET);
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
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Daftar Mahasiswa</h1>
<!-- dibawah adalah contoh metode Request GET adalah metode pengiriman data melalui URL dan data tersebut dapat ditangkap oleh variabel superglobals $_GET -->
<?php foreach($mahasiswa as $mhs) : ?>
        <li>
            <a href="3.GET.php?nama=<?= $mhs["nama"]; ?>&nrp=<?= $mhs["nrp"]; ?>&email=<?= $mhs["email"]; ?>&jurusan=<?= $mhs["jurusan"]; ?>&gambar=<?= $mhs["gambar"];?>"><?= $mhs["nama"]; ?></a>
        </li>
<?php endforeach; ?>
</body>
</html>
