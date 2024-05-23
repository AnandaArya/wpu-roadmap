<?php

interface Buah {

    public function makan();
    // method abstrak hanya interface saja
    // implementasinya ada di kelas turunannya
    public function setWarna($warna);
}

interface Benda {
    public function setUkuran($ukuran);
}

// jadi dia mewarisi semua properti dan method dari class Buah
class Apel implements Buah, Benda {
    protected $warna;
    protected $ukuran;
    public function makan() {
        // kunyah
        // sampai bagian tengah
    }

    public function setWarna($warna) {
        $this->warna = $warna;
    }

    public function setUkuran($ukuran) {
        $this->ukuran = $ukuran;
    }

}

class Jeruk implements Buah {
    protected $warna;
    public function makan() { 
        // kupas
        // kunyah
    }

    public function setWarna($warna) {
        $this->warna = $warna;
    }
}

?>