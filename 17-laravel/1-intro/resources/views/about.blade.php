<!-- . bisa di ganti juga dengan slash / sebaliknya ('layout/main') -->
@extends('layout.main')

<!-- apapun yang kita tulis di dalam yield disebutnya section -->
@section('title', 'About')

@section('container')
<div class="container">
  <div class="row">
    <div class="col-10">
      <h1 class="mt-3">Hello, {{$nama}}!</h1>
    </div>
  </div>
</div>
@endsection