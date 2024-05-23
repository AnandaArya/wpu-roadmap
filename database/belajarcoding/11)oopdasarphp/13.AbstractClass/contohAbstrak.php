<?php 
    class Buah {
        private $warna;

        public function makan() {
            // kunyah
            // nyam..nyam..nyam
        }

        public function setWarna($warna) {
            $this->warna = $warna;
        }
    }

    // jadi dia mewarisi semua properti dan method dari class Buah
    class Apel extends Buah {
        public function makan() {
            // kunyah
            // sampai bagian tengah
        }
    }

    class Jeruk extends Buah {
        public function makan() { 
            // kupas
            // kunyah
        }
    }

    // ✓✓✓
    $apel = new Apel();
    $apel->makan();


    // ??
    $buah = new Buah();
    $buah->makan();
    // jadi sepertinya class Buah ini bukan class yang tidak akan kita intansiasi
    // yang akan di instansiasi turunan
    // cara membuatya adalah tambahkan keyword abstract

    abstract class BuahBaru {
        private $warna;

        abstract public function makan();
        // method abstrak hanya interface saja
        // implementasinya ada di kelas turunannya

        public function setWarna($warna) {
            $this->warna = $warna;
        }
    }

    // jadi dia mewarisi semua properti dan method dari class Buah
    class ApelBaru extends BuahBaru {
        public function makan() {
            // kunyah
            // sampai bagian tengah
        }
    }

    class JerukBaru extends BuahBaru {
        public function makan() { 
            // kupas
            // kunyah
        }
    }

?>