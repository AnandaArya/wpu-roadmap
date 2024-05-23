// Fetch()
// "Sebuah Method pada API Javascript modern untuk mengambil resource dari jaringan, dan mengembalikan promise
// yang selesai (fullfilled) ketika da response yang tersedia."
// fetch(resource, init);
// Resources
// URL = alamat dari sumber yang kita akan ambil
// Request Object = representasi permintaan sumber
// init (Optional)
// konfigurasi tambahan pada sebuah request berbentuk object defaultnya adalah GET
// - method, headers, body, mode, cache, referrer, referrerPolicy, integritu, keepalive, signal

// Response hasil dari fetch, berupa promise. kalau resolve baru jadi object
// property
// - headers, ok, redirected, status, statusText, type, url, body
// Method
// - clone(), error(), redirect(), blob(), formData(), json(), text()



// Menggunakan Fetch
// const searchButton = document.querySelector('.search-button');
// // kita masih menggunakan function karena mungkin saja kita butuh this, kalau Arrow function tidak bisa  
// searchButton.addEventListener('click', function() {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=f6eb8859&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // ketika tombol detail diklik versi Vanilla JS
//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=f6eb8859&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                         })
//                 });
//             });
//         });

// });


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {  // calback
    const inputKeyword = document.querySelector('.input-keyword');
    // ketika kita berusaha membuat kode kita semakin modular menggunakan cara ini
    // cara kita ini adalah cara yang Synchronous. jalankan movies masukan kedalam variabel itu
    // adalah Synchronous. ketika getMovies dijalankan dia langsung jalan
    // Javascript tidak tau kalau getMovies adalah fungsi yang Asynchronous disinilah kita bisa
    // memanfaat keyword Async & Await 

    // kita harus memberi tahu fungsi Callback ini sesuati yang Asynchronous
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);   
});


// event binding
// jadi kita ngasih event ke elemen yang awalnya belum ada tapi ketika dia ada eventnya tetap bisa berjalan
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {
        // console.log('OK');
        const imdbid = e.target.dataset.imdbid;
                        // await (tunggu dulu sampai resolve) 
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=f6eb8859&s=' + keyword)
        .then(response => response.json())
        //sehingga ketika fungsi ini dijalankan akan mengembalikan objek berupa data
        .then(response => response.Search);

}


function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=f6eb8859&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}


function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function showCards(m) {
    return `<div class="col-md-6 col-lg-4 my-3">
        <div class="card"> 
            <img src="${m.Poster}" class="card-img-top" alt="#image">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
            </div> 
        </div>
    </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <img src="${m.Poster}" alt="" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Actors :</strong>Doddy, ${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer :</strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`;
}