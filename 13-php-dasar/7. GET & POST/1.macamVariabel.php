<?php 
// Variable Scope/ lingkup variabel
// varibel yang kita buat didalam function maka hanyar berlaku di function itu aja
// Variabel SUperglobals adalah variabel yang dapat kita akses dimanapun dan dimanapun didalam halaman php kita
$x = 10;

function tampilX() {
    global $x;
    echo $x;
}

tampilX();

// Superglobals = tipenya adalah array assosiative
// $_GET
// $_POST
// $_REQUEST
// $_SESSION
// $_COOKIE
// $_SERVER
// $_ENV

?>