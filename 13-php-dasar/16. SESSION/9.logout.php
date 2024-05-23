<?php 
    session_start();
    $_SESSION = [];
    session_unset();
    session_destroy();

    header("location: 8.login.php");
?>