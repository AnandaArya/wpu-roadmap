// ambil elemen2 yang di butuhkan
var  keyword = document.getElementById('keyword');
var tombolCari = document.getElementById('tombol-cari');
var container = document.getElementById('container');

keyword.addEventListener('keyup', function() {

    // buat object ajax 
    var xhr = new XMLHttpRequest()

    // cek kesiapan ajax
    xhr.onreadystatechange = function() {
        // 4 artinya sumbernya sudah ok 200 juga sumbernya ok
        if(xhr.readyState == 4 && xhr.status == 200) {
            container.innerHTML = xhr.responseText;             
        }
    }


    // eksekusi ajax
    // parameter pertama Request Methodnya apa parameter ke 2 sumbernya dari mana 
    xhr.open('GET', 'ajax/mahasiswa.php?keyword=' + keyword.value, true);
    xhr.send();

});