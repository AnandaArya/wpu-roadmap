<?php
session_start();

if(!isset($_SESSION["login"])) {
    header("location: 8.login.php");
}

require '3.functions.php';
 
$id = $_GET["id"];

if(hapus($id) > 0) {
    echo "
            <script>
                alert('data berhasil dihapus!');
                document.location.href = '2.caraBaru.php';
            </script>   
        ";
} else {
    echo "
            <script>
                alert('data gagal dihapus!');
                document.location.href = '2.caraBaru.php';
            </script>   
        ";
    }
?>