<?php 
    $conn = mysqli_connect("localhost", "root", "", "db_stateful");

    if($conn->connect_error) {
        echo "database error";
    }

?>