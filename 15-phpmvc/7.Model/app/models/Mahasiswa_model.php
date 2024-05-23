<?php

class Mahasiswa_model {
    // cara Konek ke database sekarang adalah PDO(PHP Data Object) bukan MYSQL 
    private $dbh; // database handler
    private $stmt;


    public function __construct() {
        // data source name
        $dsn = 'mysql:host=localhost;dbname=phpmvc';

        try {
            $this->dbh = new PDO($dsn, 'root', '123');
        } catch(PDOException $e) {
            die($e->getMessage());
        }
    }
        
    public function getAllMahasiswa() {
        $this->stmt = $this->dbh->prepare('SELECT * FROM mahasiswa');
        $this->stmt->execute();
        return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}