// semakin banyak kita punya callback maka disebut dengan callback hell yaitu kodenya menjorong kedalam
// ada cara yang lebh efektif lagi dengan cara menggantikan fungsi JQuery menggunakan fungsi bawaan JS yaitu Fetch
// Menggunakan Jquery tidak salah, tapi ketika menggunakan JQuery kita memanggil Library Eksternal jadi defaultnya

// perfomancenya Lebih lambat dari bawaaan JS, kalau kita bisa menggunakan JS kenapa perlu repot-repot menggunakan
// library eksternal,


// Menggunakan JQuery
// $('.search-button').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=f6eb8859&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             console.log(movies);
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
            
//             // Ketika tombol detaik diklik
//             // Jangan pakai Arrow function (karena arrow function tidak punya konsep this)
//             // kadang-kadang kalau kita pakai event handler seperti ini kita butuh thisnya
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     // console.log($(this).data('imdbid'));
//                     url: 'http://www.omdbapi.com/?apikey=f6eb8859&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error : (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error : (e) => {
//             console.log(e.responseText);
            
//         }
//     });
// });

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=f6eb8859',
//     success: results => {
//         const movies = results.Search;
//         console.log(movies);
//         let cards = '';
//         movies.forEach(m => {
//             cards += showCards(m);
//         });
//         $('.movie-container').html(cards);
        
//         // Ketika tombol detaik diklik
//         // Jangan pakai Arrow function (karena arrow function tidak punya konsep this)
//         // kadang-kadang kalau kita pakai event handler seperti ini kita butuh thisnya
//         $('.modal-detail-button').on('click', function() {
//             $.ajax({
//                 // console.log($(this).data('imdbid'));
//                 url: 'http://www.omdbapi.com/?apikey=f6eb8859&i=' + $(this).data('imdbid'),
//                 success: m => {
//                     const movieDetail = showMovieDetail(m);
//                     $('.modal-body').html(movieDetail);
//                 },
//                 error : (e) => {
//                     console.log(e.responseText);
//                 }
//             });
//         });
//     },
//     error : (e) => {
//         console.log(e.responseText);
        
//     }
// });

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
const searchButton = document.querySelector('.search-button');
// kita masih menggunakan function karena mungkin saja kita butuh this, kalau Arrow function tidak bisa  
searchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=f6eb8859&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;

            // ketika tombol detail diklik versi Vanilla JS
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=f6eb8859&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showMovieDetail(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        })
                });
            });
        });

});


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