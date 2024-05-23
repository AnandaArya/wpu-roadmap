// // Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
// CARA YANG SALAH
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function() {
//         card[i].style.display = 'none';
//     });
// }

// BISA SEPERTI INI
// const close = document.querySelectorAll('.close');
// // for (let i = 0; i < close.length; i++) {
// //     close[i].addEventListener('click', function(e) {
// //         // close[i].parentElement.style.display = 'none';
// //         e.target.parentElement.style.display = 'none';
// //     });
// // }

// // YANG LEBIH RINGKAS
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation(); // Menghentikan event bagian dari element cards 
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});

