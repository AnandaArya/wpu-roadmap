<?php 

function get_CURL($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    // bisa banyak opsi, kita pengen data yang dikembalikan adalah text(JSON) di isi true atau 1 agar kembaliannya json
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);
    
    return json_decode($result, true); //true berarti json menjadi array
}

$global = get_CURL('https://api.kawalcorona.com');

$positif = get_CURL('https://api.kawalcorona.com/positif/');

$sembuh = get_CURL('https://api.kawalcorona.com/sembuh/');

$meninggal = get_CURL('https://api.kawalcorona.com/meninggal/');

$provinsi = get_CURL('https://api.kawalcorona.com/indonesia/provinsi/');

$indonesia = get_CURL('https://api.kawalcorona.com/indonesia/');
$indonesia = $indonesia[0];


?>


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">

    <!-- font assets -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Roboto|Roboto+Mono&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/ec96cf5f4a.js" crossorigin="anonymous"></script>

    <title>CORONA</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white;">
      <div class="container">
        <a class="navbar-brand" href="#"><i class="fas fa-shield-alt"> CEGAH CORONA</i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link text-dark" href="#"><i class="far fa-file-alt"> Data</i></a>
            <a class="nav-item nav-link text-dark" href="#"><i class="far fa-address-card"> Layanan_Darurat</i></a>
            <a class="nav-item nav-link text-dark" href="#"><i class="far fa-envelope"> Hubungi Kami</i></a>
          </div>
        </div>
      </div>
    </nav>

    <!-- ================== About ==================== -->
    <section class="about">
      <div class="container">
        
        <div class="row judul">
          <div class="col mt-4">
            <h2 class="text-center">CEGAH CORONA</h2>
            <p class="text-center">Data COVID-19 Global dan Indonesia</p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="text-center">TOTAL POSITIF</h5>
                <h3 class="card-text text-center text-warning"><?= $positif["value"]; ?></h3>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="text-center">TOTAL SEMBUH</h5>
                <h3 class="card-text text-center text-success"><?= $sembuh["value"]; ?></h3>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="text-center">TOTAL MENINGGAL</h5>
                <h3 class="card-text text-center text-danger"><?= $meninggal["value"]; ?></h3>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body">
                <h3 class="text-center">INDONESIA</h3>
                <p class="card-text text-center"><span class="text-warning"><?= $indonesia["positif"]; ?></span> POSITIF, <span class="text-success"><?= $indonesia["sembuh"]; ?></span> SEMBUH, <span class="text-danger"><?= $indonesia["meninggal"]; ?></span> MENINGGAL</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- ================== About =================== -->

    <!-- ================== Provinsi Data ================== -->
    <section class="global mt-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <p>Daftar Kasus Corona Berdasarkan Provinsi</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="table tableFixHead">
                <table>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>Provinsi</th>
                      <th>Positif</th>
                      <th>Sembuh</th>
                      <th>Meninggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php $i= 1; ?>
                    <?php foreach($provinsi as $row) : ?>
                    <tr>
                      <td><?= $i++; ?></td>
                      <td><?= $row["attributes"]["Provinsi"]; ?></td>
                      <td><?= $row["attributes"]["Kasus_Posi"]; ?></td>
                      <td><?= $row["attributes"]["Kasus_Semb"]; ?></td>
                      <td><?= $row["attributes"]["Kasus_Meni"]; ?></td>
                    </tr>
                    <?php endforeach; ?>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </section>
    <!-- ================== END Provinsi Data ================== -->


    <!-- ================= Global Data ============== -->
    <section class="global mt-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <p>Daftar Kasus Corona Global</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="table tableFixHead">
                <table>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>Negara</th>
                      <th>Positif</th>
                      <th>Sembuh</th>
                      <th>Meninggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php $i= 1; ?>
                    <?php foreach($global as $row) : ?>
                    <tr>
                      <td><?= $i++; ?></td>
                      <td><?= $row["attributes"]["Country_Region"]; ?></td>
                      <td><?= $row["attributes"]["Confirmed"]; ?></td>
                      <td><?= $row["attributes"]["Recovered"]; ?></td>
                      <td><?= $row["attributes"]["Deaths"]; ?></td>
                    </tr>
                    <?php endforeach; ?>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </section>

    <!-- ================= END Global Data ============== -->


    <!-- ================ info ==================== -->
    <section class="infoPanel">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 my-2">
            <div class="card bg-danger">
              <div class="card-body text-light">
                <h5>Gejala Virus Corona</h5>
                <ul>
                  <li>Demam (suhu tubuh di atas 38 derajat Celcius)</li>
                  <li>Batuk</li>
                  <li>Sesak Napas</li>
                  <li>Sakit tenggorokan</li>
                  <li>Mengalami gangguan pada bagian perut dan kehilangan nafsu makan</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 my-2">
            <div class="card bg-success">
              <div class="card-body text-light">
                <h5>Cara Mencegah Virus Corona</h5>
                <ul>
                    <li>Mencuci tangan dengan benar</li>
                    <li>Menggunakan masker</li>
                    <li>Menjaga daya tahan tubuh</li>
                    <li>Minum vitamin C</li>
                    <li>Konsumsi gizi seimbang, perbanyak sayur dan buah</li>
                    <li>Rajin olahraga dan istirahat cukup</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 my-2">
            <div class="card bg-info daftarRS">
              <a href="https://www.kompas.com/tren/read/2020/03/03/183500265/infografik-daftar-100-rumah-sakit-rujukan-penanganan-virus-corona" class="card-body text-light" target="_blank">
                <h5>Daftar Rumah Sakit Rujukan Virus Corona</h5>
                <p class="card-text">Kompas</p>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 my-2">
            <div class="card bg-warning infoPenyakit">
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" class="card-body text-light" target="_blank">
                <h5>Media Informasi Resmi Penyakit Emerging</h5>
                <p class="card-text">Kementerian Kesehatan</p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- ================ END info ==================== -->

    <!-- ================ Footer ====================== -->
    <footer class="bg-dark text-white mt-5">
      <div class="container">
        <div class="row">
          <div class="col text-center p-3">
            <p><i>Copyright Cegahcorona&copy;2020. by Ananda Arya</i></p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/jquery-3.3.1.slim.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>