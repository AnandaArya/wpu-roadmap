<?php

class About {

    public function index($nama = 'Ananda', $pekerjaan = 'CEO') {
        echo "Halo, nama saya $nama, saya adalah seorang $pekerjaan";
    }

    public function page() {
        echo 'About/page';
    }
}