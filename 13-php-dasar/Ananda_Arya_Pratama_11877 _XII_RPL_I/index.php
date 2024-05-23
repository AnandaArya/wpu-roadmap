<?php 
    session_start();
    if(!isset($_SESSION["login"])) {
        header("location: login.php");
    }

    include "koneksi.php";
    $owner = $_SESSION["owner"];

    $result  = mysqli_query($conn, "SELECT * FROM siswa WHERE nis = '$owner'");
    $data = $result->fetch_array();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="jumbotron mt-3">
            <div class="display-4">Selamat Datang, <?= $data["nama"]; ?></div>
        </div>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col" colspan="2">Profil</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>NIS</td>
                    <td><?= $data['nis']; ?></td>
                </tr>
                <tr>
                    <td>Nama</td>
                    <td><?= $data['nama']; ?></td>
                </tr>
                <tr>
                    <td>TTL</td>
                    <td><?= $data['ttl']; ?></td>
                </tr>
                <tr>
                    <td>KELAS</td>
                    <td><?= $data['kelas']; ?></td>
                </tr>
            </tbody>
        </table>
        <a href="logout.php" class="btn btn-danger py-2 px-3">LOGOUT</a>
    </div>

</body>
</html>