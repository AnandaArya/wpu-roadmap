<?php

class Controller {
    public function view($view, $data = []) {
        // kita berada di public index.php keluar dulu ../
        require_once '../app/views/' . $view . '.php';
    }

    public function model($model) {
        require_once '../app/models/'. $model . '.php';
        // kita harus intansiasi dulu
        return new $model;

    }
}