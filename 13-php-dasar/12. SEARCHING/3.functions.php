<?php  
$conn = mysqli_connect("localhost", "root", "123", "phpdasar");

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
    $gambar = htmlspecialchars($data["gambar"]);


    $query = "INSERT INTO mahasiswa VALUES ('', '$nrp', '$nama', '$email', '$jurusan', '$gambar')";

    // query insert data
    mysqli_query($conn, $query);

    // apabila semua diatas berhasil jalan maka di kembalikan nilai 1
    // function untuk mengembalikan angka (nilai) apabila berhasil nilai yang dikembalikan adalah (1) kalau error akan menghasilkan -1
    return mysqli_affected_rows($conn);
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
    $gambar = htmlspecialchars($data["gambar"]);


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

?>