// Javascript
// "is a single-threaded, non-blocking, asynchronous and concurrent language -latenflip.com"
// Thread = urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain
// intinya Javascript hanya bisa melakukan satu hal pada waktu tertentu karena dia single threaded

// Single Thread (JS)
// thread 1 => task -1 => task 2 => task 3 => task 4
// Javascript membaca baris per baris dan menyelesaikannya

// Multi threaded (kerjaannya bisa dibagi-bagi dalam thread yang berbeda)
// thread 1 => task 1              =>   task 4
// thread 2     =>     task 2
// thread 3              =>     task 3


// Blocking (kalau task 1 belum selesai maka dia tidak bisa masuk ke thread berikutnya)
// Task 1  -> (belum beres) (-) (tidak bisa lanjut ke ) task 2

// Kalau non-blocking (JS)
// Task 1 (belum beres) -> (bisa lanjut ke) task 2


// Synchronous
// task -1 => task 2 => task 3 => task 4

// Asynchronous (single threaded)
// Task 1          =>         task 2    =>     task 1             =>            task 2         task 1     task 2
// mulai (belum selesai)      mulai        (ngerjakan ulang)           (ngerjakan ulang)      selesai    selesai
// bisa lanjut ke task yang lain        pindah lagi ngerjakan task 1


// Asynchoronous (Multi threaded)
// kita bisa mengerjakannya secara bersamaan di thread yang berbeda
// thread 1   task 1        task 4  
// thread 2           task 2
// thread 3   task 3


// Asynchronous + single-threaded = Concurrency
// Asynchronous + multi-threaded  = Paralellism

// Kesimpulan
// Single vs Multi thread
// lingkungan eksekusi 'task'
// Blocking vs Non-Blocking
// Teknik 'Ngoding' (input output related)
// Sysnchronous vs Asnchronous
// Teknik 'ngoding' (HTTP Request related)
// Concurrent vs Parallel(ada juga hubunggannya dengan infrastruktur atau hardware)
// Lingkukangan eksekusi 'task'


// Javascript
// didalamnya terdapat V8 Engine
// Heap                Stack
// Memory Allocation   Function Call & Execution Context

// di eksekusi didalam task setelah di eksekusi hilang
// console.log('satu');
// console.log('dua');
// console.log('tiga');


// lebih details di http://latenflip.com/loupe/ by Philip Roberts

// Asynschronous callback bisa terjadi karena ada sesuatu yang namanya Event loop

// karena setTimeout Asynchronous punyanya web API dia tetap masuk ke situ
// Maka function tunggu() hanya bisa di eksekusi ketika stacknya kosong
// makanya tampilnya
// satu
// tiga
// dua
console.log('satu');
setTimeout(function tunggu() {
    console.log('dua');
}, 0)
console.log('tiga');



// Intinya jangan sampai kita memblock event loop




