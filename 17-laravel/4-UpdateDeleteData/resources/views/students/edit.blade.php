<!-- . bisa di ganti juga dengan slash / sebaliknya ('layout/main') -->
@extends('layout.main')

<!-- apapun yang kita tulis di dalam yield disebutnya section -->
@section('title', 'Daftar Mahasiswa')

@section('container')
<div class="container">
  <div class="row">
    <div class="col-8">
      <h1 class="mt-3">Form Ubah Data Mahasiswa</h1>

      <form method="POST" action="/students/{{ $student->id }}">
        @method('patch')
        <!-- @method('put') sama-sama untuk edit patch/put -->
        @csrf`
        <div class="form-group">
          <label for="nama">Nama</label>
          <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" placeholder="Masukan Nama" name="nama" value="{{ $student->nama }}">
          @error('nama')
            <div class="invalid-feedback">{{ $message }}</div>
          @enderror
        </div>
        <div class="form-group" >
          <label for="nrp">NRP</label>
          <input type="text" class="form-control @error('nrp') is-invalid @enderror" id="nrp" placeholder="Masukan NRP" name="nrp" value="{{ $student->nrp }}">
          @error('nrp')
            <div class="invalid-feedback">{{ $message }}</div>
          @enderror
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Masukan Email" name="email" value="{{ $student->email }}">
        </div>
        <div class="form-group">
          <label for="jurusan">Jurusan</label>
          <input type="text" class="form-control" id="jurusan" placeholder="Masukan Jurusan" name="jurusan" value="{{ $student->jurusan }}">
        </div>
        <button type="submit" class="btn btn-primary">Ubah Data</button>
      </form>

    </div>
  </div>
</div>
@endsection