<?php

class App {
    public function __construct() {
        $url = $this->parseURL();
        var_dump($url);

    }

    public function parseURL() {
        // kalau ada URL yang dikirimkan
        if(isset($_GET['url'])) {
            // rtrim untuk menghapus tanda / yang terakhir
            $url = rtrim($_GET['url'], '/');
            // supaya URL bersih dari karakter aneh
            $url = filter_var($url, FILTER_SANITIZE_URL);
            // pecah menjadi array
            $url = explode('/', $url);
            return $url;
        }
    }
        
}