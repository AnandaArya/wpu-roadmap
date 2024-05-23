<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<!-- bedanya Metode Request tidak ada di URL sementara Metode Request GET itu mengirimkan datanya lewat URL lalu di tangkap oleh variabel superGlobals GET

sementara key yang ada di POST adalah name=" " dari form
-->
<?php if(isset($_POST["submit"])) : ?>
    <h1>Halo, Selamat Datang <?= $_POST["nama"]; ?></h1>
<?php endif; ?>

<form action="" method="post">
    Masukan nama:
    <input type="text" name="nama">
    <br>
    <button type="submit" name="submit">Kirim!</button>
</form>

</body>
</html>