<?php 

// Jualan Produk
// Komik
// Game

class Produk {
    // property
    public $judul = "judul", 
           $penulis = "penulis", 
           $penerbit = "penerbit",
           $harga = 0;
    
    // Method
    public function getLabel() {
        // $this untuk mengambil peroperty yang di dalam class ketika dibuat instancenya
        return "$this->penulis, $this->penerbit";
    }
    
}

// $produk1 = new Produk();
// $produk1->judul = "Naruto";
// var_dump($produk1);

// echo "<br>";

// $produk2 = new Produk();
// $produk2->judul = "Uncharted";
// $produk2->tambahProperty = "hahaha";
// var_dump($produk2);

$produk3 = new Produk();
$produk3->judul = "Naruto";
$produk3->penulis = "Masashi Kishimoto";
$produk3->penerbit = "Shonen Jump";
$produk3->harga = 30000;

echo "<hr>";

$produk4 = new Produk();
$produk4->judul = "Uncharted";
$produk4->penulis = "Neil Druckmann";
$produk4->penerbit = "Sony Computer";
$produk4->harga = 250000;

echo "Komik :" . $produk3->getLabel();
echo "<br>";
echo "Game :" . $produk4->getLabel();
?>