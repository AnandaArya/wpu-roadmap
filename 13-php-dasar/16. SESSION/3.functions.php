<?php  
$conn = mysqli_connect("localhost", "root", "", "phpdasar");

function query($query) {
    global $conn;
   $result = mysqli_query($conn, $query);
   $rows = [];

   while( $row = mysqli_fetch_assoc($result)) {
       $rows[] = $row;
   }
   return $rows;
}

// mengapa memakai htmlspecialchars? supaya elemen htmlnya terbaca jadi string

function tambah ($data) {
    global $conn;
    $nrp = htmlspecialchars($data["nrp"]);
    $nama = htmlspecialchars($data["nama"]);
    $email = htmlspecialchars($data["email"]);
    $jurusan = htmlspecialchars($data["jurusan"]);

    // upload gambar
    $gambar = upload();
    // apabila yang dikirimkan fungsi upload gagal, kalo gagal fungsi tambah ini di berhentikan kalu ketemu false INSERT nya tidak di jalankan

    // !gambar/ gambar === false {};
    if(!$gambar) {
        return false;
    }

    $query = "INSERT INTO mahasiswa VALUES ('', '$nrp', '$nama', '$email', '$jurusan', '$gambar')";

    // query insert data
    mysqli_query($conn, $query);

    // apabila semua diatas berhasil jalan maka di kembalikan nilai 1
    // function untuk mengembalikan angka (nilai) apabila berhasil nilai yang dikembalikan adalah (1) kalau error akan menghasilkan -1
    return mysqli_affected_rows($conn);
}

function upload() {
    $namaFile = $_FILES['gambar']['name'];
    $ukuranFile = $_FILES['gambar']['size'];
    $error = $_FILES['gambar']['error'];
    $tmpName = $_FILES['gambar']['tmp_name'];

    // cek apakah tidak ada gambar yang diupload
    if($error === 4) {
        echo 
            "<script>
                alert('pilih gambar terlebih dahulu');
            </script>";
        return false;
    }

    // cek apakah yang diupload adalah gambar
    $ekstensiGambarValid = ['jpg', 'jpeg', 'png'];
    // explode untuk memecah string menjadi array
    $ekstensiGambar = explode('.', $namaFile);
    // setelah di xplode ambil dulu yang terakhir kita ubah menjadi huruf kecil
    $ekstensiGambar = strtolower(end($ekstensiGambar));

    // in_array buat ngecek ada gak sebuah string di dalam array
    if( !in_array($ekstensiGambar, $ekstensiGambarValid) ) {
        echo "<script>
                alert('yang anda upload bukan gambar');
            </script>";
        return false;
    }
    
    // cek jika ukurannya terlalu besar dalam byte
    if($ukuranFile > 1000000) {
        echo "<script>
                alert('ukuran gambar terlalu besar!');
            </script>";
    }

    // lolos pengecekan, gambar siap diupload
    // generate nama gambar baru
    $namaFileBaru = uniqid();
    //  .= ditempel / dirangkai dengan titik
    $namaFileBaru .= '.';
    $namaFileBaru .= $ekstensiGambar;

    move_uploaded_file($tmpName, 'img/'. $namaFileBaru);

    // di return supaya isi $gambar adalah namaFilenya sehingga gambar bisa dinsert
    return $namaFileBaru;


}


function hapus($id) {
    global $conn;
    mysqli_query($conn, "DELETE FROM mahasiswa WHERE id = $id");

    // apabila berhasil di hapus maka akan mengembalikan nilai 1
    return mysqli_affected_rows($conn);
}

function ubah($data) {
    global $conn;
    $id = $data["id"];
    $nrp = htmlspecialchars($data["nrp"]);
    $nama = htmlspecialchars($data["nama"]);
    $email = htmlspecialchars($data["email"]);
    $jurusan = htmlspecialchars($data["jurusan"]);
    $gambarLama = htmlspecialchars($data["gambarLama"]);

    // cek apakah user pilih gambar baru atau tidak error = 4 itu berarti tidak pilh gambar
    if($_FILES["gambar"]["error"] === 4) {
        $gambar = $gambarLama;
    } else {
        $gambar = upload();
    }
    $query = "UPDATE mahasiswa SET 
                nrp = '$nrp', 
                nama = '$nama',
                email = '$email',
                jurusan = '$jurusan',
                gambar = '$gambar'
            WHERE id = $id;
            ";

    // query insert data
    mysqli_query($conn, $query);

    // apabila semua diatas berhasil jalan maka di kembalikan nilai 1
    // function untuk mengembalikan angka (nilai) apabila berhasil nilai yang dikembalikan adalah (1) kalau error akan menghasilkan -1
    return mysqli_affected_rows($conn);
}

function cari($keyword) {
    $query = "SELECT * FROM mahasiswa WHERE 
                nama LIKE '%$keyword%' OR 
                nrp LIKE '%$keyword%' OR
                email LIKE '%$keyword%' OR
                jurusan LIKE '%$keyword%' ";

    // kembalikan hasilnya berupa assosiative dan masukan ke dalam $mahasiswa
    return query($query);
}

function registrasi($data) {
    global $conn;

    $username = strtolower(stripslashes($data["username"]));
    // mysqli_real_escape_string() = untuk memungkinan si user passwordnya ada tanda kutipnya
    $password = mysqli_real_escape_string($conn, $data["password"]);
    $password2 = mysqli_real_escape_string($conn, $data["password2"]);

    // cek username sudah ada atau belum
    $result = mysqli_query($conn, "SELECT username FROM user WHERE username = '$username'");
    if(mysqli_fetch_assoc($result)) {
        echo "<script>
                alert('username sudah terdaftar');
            </script>";
        return false;
    }
    
    // cek konfirmasi password
    if($password !== $password2) {
        echo "<script>
                alert('konfirmasi password tidak sesuai!');
            </script>";
        return false;
    }

    // enkripsi password
    $password = password_hash($password, PASSWORD_DEFAULT);

    // tambahkan userbaru ke database
    mysqli_query($conn, "INSERT INTO user VALUES('', '$username', '$password')");

    return mysqli_affected_rows($conn);
}


?>