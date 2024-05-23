// DOM Selection
// document.getElemenById() -> element
// document.getElementsByTagName() -> HTMLCollection
// document.getElementsByClassName() -> HTMLCollection
// document.querySelector() -> element
// document.querySelectorAll() -> nodeList


// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Ananda Arya</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>';


// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'ananda'); // menimpa kelas yang sudah ada

// judul.getAttribute('id');


// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// a.removeAttribute('href');

const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.remove('label');
p2.classList.toggle('label'); // yang ada bakal hilang yang tidak ada bakal ada kyak NGNL
element.classList.item(2); // mencari urutan kelas kedua itu apa hitungannya dari 0
element.classList.contains('dua') // dia nanya ada gak class yang namanya dua
element.classList.replace('tiga', 'empat');

