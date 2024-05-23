<?php

class Mahasiswa_model {
    private $table = 'mahasiswa';

    public function __construct() {
        $this->db = new Database;
    }
    

    public function getAllMahasiswa() {
        $this->db->query('SELECT * FROM ' . $this->table);
        return $this->db->resultSet();
    }

    public function getMahasiswaById($id) {
        $this->db->query('SELECT * FROM ' . $this->table . ' WHERE id=:id');
        // kenapa tidak kita masukan $id diatas? karena untuk menghindari SQL Injection
        $this->db->bind('id', $id);
        return $this->db->single();
    }
}