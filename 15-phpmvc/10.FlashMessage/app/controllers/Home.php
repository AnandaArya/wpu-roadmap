<?php

class Home extends Controller{
    // untuk jadi method defaultnya, ketika kita tidak menuliskan apapun diURL maka method inilah yang dipanggil
    public function index() {
        // ini artinya saya akan memanggil folder yang ada di view lalu ke folder home -> file yang namanya index
        $data['judul'] = 'Home';
        $data['nama'] = $this->model('User_model')->getUser();
        $this->view('templates/header', $data);
        $this->view('home/index', $data);
        $this->view('templates/footer');

    }
}