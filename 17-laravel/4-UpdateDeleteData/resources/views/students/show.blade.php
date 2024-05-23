<!-- . bisa di ganti juga dengan slash / sebaliknya ('layout/main') -->
@extends('layout.main')

<!-- apapun yang kita tulis di dalam yield disebutnya section -->
@section('title', 'Daftar Mahasiswa')

@section('container')
<div class="container">
  <div class="row">
    <div class="col-6">
      <h1 class="mt-3">Detail Mahasiswa</h1>

        <div class="card">
          <div class="card-body">
              <h5 class="card-title">{{ $student->nama }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ $student->nrp }}</h6>
              <p class="card-text">{{ $student->email }}</p>
              <p class="card-text">{{ $student->jurusan }}</p>

              <a href="{{ $student->id }}/edit" type="submit" class="btn btn-primary">Edit</a>
              <form action="/students/{{ $student->id }}" method="post" class="d-inline">
                @method('DELETE') <!-- agar tidak ada orang yang ngetikan di urlnya method delete di jalankan hanya ketika tombolnya di pencet jadi aman beda dengan CI atau PHP native-->
                @csrf
                <button type="submit" class="btn btn-danger">Delete</button>
              </form>
              <a href="/students" class="card-link">kembali</>
          </div>
        </div>

    </div>
  </div>
</div>
@endsection