// ketika dokumen sudah siap baru dijalankan function didalamnya untuk menggatikan method ready
$(function(){

    $('.tombolTambahData').on('click', function() {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');

    });

    $('.tampilModalUbah').on('click', function() {
        
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/belajarcoding/10)phpmvc/12.UpdateData+ajax/public/mahasiswa/ubah')

        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/belajarcoding/10)phpmvc/12.UpdateData+ajax/public/mahasiswa/getubah',
            // id sebelah kiri adalah id yang dikirimkan id kanan isi datanya
            data: {id : id},
            method: 'post',
            dataType: 'json',
            // kalau misalkan permintaan ajax berhasil kalau ada yang data dikembalikan di tangkap oleh parameter data
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });
 
    });
    
});