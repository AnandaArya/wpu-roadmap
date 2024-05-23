<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// root (halaman utama)
// Route::get('/', function () {
//     return view('index');
// });

// Route::get('/about', function () {
//     $nama = 'Doddy Ferdiansyah';
//     return view('about', ['nama' => $nama]);
// });

Route::get('/', 'PagesController@home');
Route::get('/about', 'PagesController@about');

Route::get('/mahasiswa', 'MahasiswaController@index');
Route::get('/kelas', 'KelasController@index');
Route::get('/kelas/create ', 'KelasController@create');
Route::get('/kelas/{id_kelas}', 'KelasController@show');
Route::post('/kelas', 'KelasController@store');


// Ini dengan cara MANUAL
// // Students
// Route::get('/students', 'StudentsController@index');
// // kalau ada request methodnya get kehalam /students/ + id student arahkan ke controllerStudent methodnya show
// Route::get('/students/create ', 'StudentsController@create');
// Route::get('/students/{student}', 'StudentsController@show');
// Route::post('/students', 'StudentsController@store');

// Route::delete('/students/{student}', 'StudentsController@destroy');
// // edit untuk nampilkan form sementara untuk mengubahnya menggunakan UPDATE
// Route::get('/students/{student}/edit', 'StudentsController@edit');
// // patch / put sama sama untuk edit
// Route::patch('/students/{student}', 'StudentsController@update');

// ini mengganti semua baris diatas cara OTOMATIS
Route::resource('students', 'StudentsController');