<?php 

// Jualan Produk
// Komik
// Game

class Produk {
    // property
    public $judul,
           $penulis,
           $penerbit,
           $harga;
    
    public function __construct($judul = "judul", $penulis = "penulis", $penerbit = "produk", $harga = 0) {
        $this->judul = $judul;
        $this->penulis = $penulis;
        $this->penerbit = $penerbit;
        $this->harga = $harga;

    }
    
    // Method
    public function getLabel() {
        // $this untuk mengambil peroperty yang di dalam class ketika dibuat instancenya
        return "$this->penulis, $this->penerbit";
    }
    
}


$produk1 = new Produk("Naruto", "Masashi Kishimoto", "Shonen Jump", 3000);
$produk2 = new Produk("Uncharted", "Neil Druckmann", "Sony Computer", 250000);
$produk3 = new Produk("Dragon Ball");

echo "Komik : " . $produk1->getLabel();
echo "<br>";
echo "Game : " . $produk2->getLabel();
echo "<br>";
var_dump($produk3);
?>