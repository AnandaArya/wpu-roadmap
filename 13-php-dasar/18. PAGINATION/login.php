<?php
session_start();
require 'functions.php';

// cookie lebih efektif jika di simpan didalam database

// cek cookie
if(isset($_COOKIE['id']) && isset($_COOKIE['key'])) {
    $id = $_COOKIE['id'];
    $key = $_COOKIE['key'];

    // cari data mahasiswa berdasaran id supaya dapat usernamenya terus dibandingkan 
    //dengan key kalau sama keynya valid

    // ambil username berdasarkan id
    $result = mysqli_query($conn, "SELECT username FROM user WHERE 
        id = $id");
    $row = mysqli_fetch_assoc($result);

    // cek cookie dan username
    // key adalah username yang sudah di acak sekarang kita acak username baru berdarsakan $result, kalau sama dia user yang benar 
    if($key === hash('sha256', $row['username'])) {
        $_SESSION['login'] = true;
    }
}

if(isset($_SESSION["login"])) {
    header("location: index.php");
    exit;
}


if(isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $result = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username'");

    // cek username
    if(mysqli_num_rows($result) == 1) {
 
        // cek password
        // $row = untuk mengambil data dari tabel user isinya id, username, pw
        $row = mysqli_fetch_assoc($result);
        if(password_verify($password, $row["password"])) {
            // set session
            $_SESSION["login"] = true;

            // cek remember me 
            if(isset($_POST["remember"])) {
                // buat cookie
                // samarkan aja namanya kalau id nanti ketahuan
                setcookie('id', $row['id'], time()+60);
                setcookie('key', hash('sha256', $row['username']), time()+60);
            }
            
            header("Location: index.php");
            exit;
        }
    }

    $error = true;

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Halaman Login</h1>

    <?php if(isset($error)) : ?>
        <p style="color: red; font-style:italic;">username / password salah</p>
    <?php endif; ?>
    <form action="" method="POST">
        <ul>
            <li>
                <label for="username">username</label>
                <input type="text" name="username" id="username">
            </li>
            <li>
                <label for="password">password</label>
                <input type="password" name="password" id="password">
            </li>
            <li>
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">Remember me</label>
            </li>
            <li>
                <button type="submit" name="login">login</button>
            </li>
        </ul>
    </form>
</body>
</html>