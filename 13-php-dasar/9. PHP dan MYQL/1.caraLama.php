<?php 
// koneksi ke database
$conn = mysqli_connect("localhost","root", "123", "phpdasar");

// ambil data dari tabel mahasiswa (LEMARI) / query data mahasiswa
$result = mysqli_query($conn, "SELECT * FROM mahasiswa");

// ambil data (fetch) mahasiswa dari object result
// mysqli_fetch_row() // mengembalikan array numerik
// mysqli_fetch_assoc() // mengembalikan array asssosiative
// mysqli_fetch_array() // mengembalikan keduanya tetapi kekurngannya datanya jadi double
// mysqli_fetch_object() // mengembalikan objek

// while ($mhs = mysqli_fetch_assoc($result)) {
//     var_dump($mhs);
// }

// cek error
// if(!$result) {
//     echo mysqli_error($conn);
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Halaman Admin</title>
</head>
<body>
    
<h1>Daftar Mahasiswa</h1>

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
    <?php while ($row = mysqli_fetch_assoc($result)): ?>
    <tr>
        <td><?= $i; ?></td>
        <td>
            <a href="">Ubah</a> | <a href="">Hapus</a>
        </td>
        <td><img src="img/<?= $row["gambar"]?>"></td>
        <td><?= $row["nrp"]; ?></td>
        <td><?= $row["nama"]; ?></td>
        <td><?= $row["email"]; ?></td>
        <td><?= $row["jurusan"]; ?></td>
    </tr>
    <?php $i++ ?>
    <?php endwhile; ?>
</table>

</body>
</html>