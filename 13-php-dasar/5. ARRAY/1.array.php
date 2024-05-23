

<style>
    .array {
        back
    }
</style>







<?php




$hari = array("Senin", "Selasa", "Rabu");
// cara baru
$bulan = ["Januari", "Februari", "Maret"];
// elemen pada array boleh berbeda
$arr1 = [123, "tulisan", false];

// Menampilkan array
// var_dump / print_r()
// var_dump($hari);
// echo "<br>";
// print_r($bulan);
// echo "<br>";

// echo $arr1[1];
// echo "<br>";
// echo $bulan[1];

var_dump($hari);
$hari[] = "Kamis";
$hari[] = "Jum'at";
echo "<br>";
var_dump($hari);

?>