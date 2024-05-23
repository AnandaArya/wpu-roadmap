<!-- . bisa di ganti juga dengan slash / sebaliknya ('layout/main') -->
@extends('layout.main')

<!-- apapun yang kita tulis di dalam yield disebutnya section -->
@section('title', 'Daftar Mahasiswa')

@section('container')
<div class="container">
  <div class="row">
    <div class="col-8">
      <h1 class="mt-3">Tambah Data Mahasiswa</h1>

      <form method="POST" action="/students">
        @csrf
        <div class="form-group">
          <label for="nama">Nama</label>
          <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" placeholder="Masukan Nama" name="nama" value="{{ old('nama') }}">
          @error('nama')
            <div class="invalid-feedback">{{ $message }}</div>
          @enderror
        </div>
        <div class="form-group">
          <label for="nrp">NRP</label>
          <input type="text" class="form-control @error('nrp') is-invalid @enderror" id="nrp" placeholder="Masukan NRP" name="nrp" value="{{ old('nrp') }}">
          @error('nrp')
            <div class="invalid-feedback">{{ $message }}</div>
          @enderror
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Masukan Email" name="email" value="{{ old('email') }}">
        </div>
        <div class="form-group">
          <label for="jurusan">Jurusan</label>
          <input type="text" class="form-control" id="jurusan" placeholder="Masukan Jurusan" name="jurusan" value="{{ old('jurusan') }}">
        </div>
        <button type="submit" class="btn btn-primary">Tambah Data</button>
      </form>

    </div>
  </div>
</div>
@endsection