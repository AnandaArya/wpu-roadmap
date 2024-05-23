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
const close = document.querySelectorAll('.close');
console.log(close);
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// YANG LEBIH RINGKAS
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        console.log(e.target);
    });
});

const nama = document.querySelector('.nama');
console.log(nama.previousElementSibling);

// DOM Traversal Method           Hasil
// parentNode                     node
// parentElement                  element
// nextSibling (saudara kandung)  node
// nextElementSibling             element
// previousSibling                node
// previousElementSibling         element