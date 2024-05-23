<?php
    $mahasiswa = [["Ananda Arya", "043040023", "Tekin Informatika", "anandaar04@gmail.com"],["Pratama", "043040023", "Tekin Informatika", "pratama@gmail.com"]];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=j, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .kotak {
        background-color: lightblue;
    }
    </style>
</head>
<body>
    <h1>Daftar Masiswa</h1>
    <?php foreach($mahasiswa as $mhs) : ?>
        <ul>
            <li>Nama :<?= $mhs[0] ?></li>
            <li>Nrp :<?= $mhs[1]?></li>
            <li>Jurusan :<?= $mhs[2]?></li>
            <li>Email :<?= $mhs[3]?></li>
        </ul>
    <?php endforeach; ?>
</body>
</html>