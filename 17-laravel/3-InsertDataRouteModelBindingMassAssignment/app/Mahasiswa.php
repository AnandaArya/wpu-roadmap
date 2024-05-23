<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    //


    // kalau misalkan nama tabel tidak default maka perlu di tambah ini defaultnya adalah
    // penamaan Model Singular tanpa S (Student) dan penamaan tabel adalah jamak pake S (Students) sama juga dengan primary key (mahasiswa_id) maka perlu protected juga seperti dibawah
    // protected $table = 'mahasiswa'; 
    protected $table = 'mahasiswa';
}
