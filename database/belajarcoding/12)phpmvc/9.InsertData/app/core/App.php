<?php

class App {
    // properi untuk menentukan controller, method, dan parameter defaultnya
    protected $controller = 'Home';
    protected $method = 'index';
    protected $params = [];

    public function __construct() {
        $url = $this->parseURL();

        // ada tidak sebuah file didalam folder controllers yang namanya Home.php sesuai dengan nama yang kita tulis disini
        // kita sekarang lagi berada di index
        // controller
        if(file_exists('../app/controllers/' . $url[0] . '.php')) {
            // kalau ada kita timpa $controller  yang di class App dengan controller yang baru
            $this->controller  = $url[0];
            // kita unset controllernya tersisa method, dan params
            unset($url[0]);
        }

        require_once '../app/controllers/' . $this->controller . '.php';
        $this->controller = new $this->controller;

        // method
        if(isset($url[1])) {
            // kalau ada  methodnya ada gak di dalam controllernya
            if(method_exists($this->controller, $url[1])) {
                $this->method = $url[1];
                // jadi kita unset methodnya tersisa parameternya
                unset($url[1]);
            }
        }

        // params
        if(!empty($url)) {
            $this->params = array_values($url);
        }

        // jalankan controller & method, serta kirimkan params jika ada
        call_user_func_array([$this->controller, $this->method], $this->params);

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