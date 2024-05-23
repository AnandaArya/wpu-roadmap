// Manipulasi Node (memungkinkan kita untuk menambah elemen baru pada dom, atau menghapus 
//                  dan bahkann mengganti sebuah elemen menggunakan elemen baru)

// Method Manipulasi Node
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()
// ..

// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru diakhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);



const liBaru2 = document.createElement('li');
const teksLiBaru2 = document.createTextNode('item baru 2');

liBaru2.appendChild(teksLiBaru2);

const li4 = ul.querySelector('li:nth-child(4)');
ul.insertBefore(liBaru2, li4);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru2.style.backgroundColor = 'lightgreen';

// Manipulasi Node (method baru)
// parentNode.append()
// parentNode.prepend()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()
// ..,