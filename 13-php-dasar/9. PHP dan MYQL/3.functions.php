<?php  
$conn = mysqli_connect("localhost", "root", "123", "phpdasar");

function query($query) {
    global $conn;
   $result = mysqli_query($conn, $query);
   $rows = [];

   while( $row = mysqli_fetch_assoc($result)) {
       $rows[] = $row;
   }
   return $rows;
}

?>