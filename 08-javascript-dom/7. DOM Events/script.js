// const p3 = document.querySelector('.p3');

// // simpan attribute event Handlernya di html onclick = "ubahWarna()"
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru!');

//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

// Event Handler (click) itu akan menimpa event yang sebelumnya
const p3 = document.querySelector('.p3');

// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});

// Daftar Event
// Mouse Event
// Resources EventFocus 
// View Event
// Form Event
// Form Event
// CSS Animation & transition Event
// Drag & Drop Event
// dll

// bisa liat disini https://developer.mozilla.org/en-US/docs/Web/Events