<?php

class Controller {
    public function view($view, $data = []) {
        // kita berada di public index.php keluar dulu ../
        require_once '../app/views/' . $view . '.php';
    }
}