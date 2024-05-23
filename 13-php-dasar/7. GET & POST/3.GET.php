<?php 
// cek apakah tidak ada data $_GET
// gunanya untuk mencegah orang yang langsung masuk ke halaman (ingin berbuat jahat)
if( !isset($_GET["nama"]) || 
    !isset($_GET["nrp"]) ||
    !isset($_GET["email"]) ||
    !isset($_GET["jurusan"]) || 
    !isset($_GET["nrp"]) ) {
    // redirect = memindahkan user ke halaman lain
    header("location: 2.metodeRequestGET.php");
    // akhiri dengan exit supaya script dibawahnya tidak di eksekusi
    exit; 
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Detail Mahasiswa</title>
</head>
<body>
<ul>
    <li><img src="img/<?= $_GET["gambar"]; ?>"></li>
    <li><?= $_GET["nama"]; ?></li>
    <li><?= $_GET["nrp"]; ?></li>
    <li><?= $_GET["email"]; ?></li>
    <li><?= $_GET["jurusan"]; ?></li>
</ul>

<a href="2.metodeRequestGET.php">kembali ke daftar Mahasiswa</a>
</body>
</html>
