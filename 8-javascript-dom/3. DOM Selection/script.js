// DOM Selection
// document.getElemenById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red'; // kalau di javascript maka akan menjadi inline css
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Ananda Arya';

// document.getElementsByTagName()
// -> HTMLCollection
const p = document.getElementsByTagName('p');
// p.style.backgroundColor = 'lightblue'; // dia tidak bisa menset bg-color dari array maka harus menambahkan index dimulai dari [0]
// p[0].style.backgroundColor = 'lightblue'; yang benar seperti ini
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0]; // bentuknya HTMLCollection maka harus di ubah ke elemen dengan menambahkan index [0]
h1.style.fontSize = '50px';

// document.getElementsByClassName()
// -> HTMLCollection

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascriptnya';