<?php 
session_start();

if(!isset($_SESSION["login"])) {
    header("location: 8.login.php");
}


// koneksi ke database
require '3.functions.php';
// ambil data dari tabel mahasiswa / query data mahasiswa
$mahasiswa = query("SELECT * FROM mahasiswa");

// tombol cari diklik
if(isset($_POST["cari"])) {
    $mahasiswa = cari($_POST["keyword"]);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Halaman Admin</title>
</head>
<body>

<a href="9.logout.php">Logout</a>
    
<h1>Daftar Mahasiswa</h1>
<a href="4.tambah.php">Tambah Data Mahasiswa</a>
<br><br>

<form action="" method="POST">

    <input type="text" name="keyword" size="30" autofocus placeholder="masukan keyword pencarian..." autocomplete="off">
    <button type="submit" name="cari">Cari!</button>

</form>

<br>
<table border="1" cellpadding="10" cellspacing="0">
    <tr>
        <th>No.</th>
        <th>Aksi</th>
        <th>Gambar</th>
        <th>NRP</th>
        <th>Nama</th>
        <th>Email</th>
        <th>Jurusan</th>
    </tr>
    <?php $i = 1; ?>
    <?php foreach ($mahasiswa as $row) : ?>
    <tr>
        <td><?= $i; ?></td>
        <td>
            <a href="6.ubah.php?id=<?= $row["id"]; ?>">Ubah</a> | 
            <a href="5.hapus.php?id=<?= $row["id"]; ?>" onclick="return confirm('yakin');">Hapus</a>
        </td>
        <td><img src="img/<?= $row["gambar"]?>"></td>
        <td><?= $row["nrp"]; ?></td>
        <td><?= $row["nama"]; ?></td>
        <td><?= $row["email"]; ?></td>
        <td><?= $row["jurusan"]; ?></td>
    </tr>
    <?php $i++ ?>
    <?php endforeach; ?>
</table>

</body>
</html>