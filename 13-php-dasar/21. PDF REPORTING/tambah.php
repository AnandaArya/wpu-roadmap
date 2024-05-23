<?php 
session_start();

if(!isset($_SESSION["login"])) {
    header("location: ../../login.php");
}

require 'functions.php';

if(isset($_POST["submit"])) {
    // ammbil data dari tiap elemen dalam form $_POST["name"]; dari formnya

    // cek apakah data berhasil di tambah atau tidak
    if(tambah($_POST) > 0) {
        echo "
            <script>
                alert('data berhasil di tambahkan!');
                document.location.href = 'index.php';
            </script>   
        ";
    } else {
        echo "
        <script>
            alert('data gagal di tambahkan!');
            document.location.href = 'index.php';
        </script>
        ";
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>Tambah Data Mahasiswa</h1>

    <form action="" method="post" enctype="multipart/form-data">
        <ul>
            <li>
                <label for="nrp">NRP :</label>
                <input type="text" name="nrp" id="nrp" required>
            </li>
            <li>
                <label for="nama">Nama :</label>
                <input type="text" name="nama" id="nama">
            </li>
            <li>
                <label for="email">Email :</label>
                <input type="text" name="email" id="email">
            </li>
            <li>
                <label for="jurusan">Jurusan :</label>
                <input type="text" name="jurusan" id="jurusan">
            </li>
            <li>
                <label for="gambar">Gambar :</label>
                <input type="file" name="gambar" id="gambar">
            </li>
            <li>
                <button type="submit" name="submit">Tambah Data!</button>
            </li>
        </ul>
    </form>
</body>
</html>