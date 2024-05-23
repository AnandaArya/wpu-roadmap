<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kela extends Model
{
    protected $fillable = ['id_kelas', 'nama', 'jumlah_siswa'];
}
