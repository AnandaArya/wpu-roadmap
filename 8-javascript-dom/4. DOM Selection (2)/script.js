// DOM Selection
// document.getElemenById() -> element
// document.getElementsByTagName() -> HTMLCollection
// document.getElementsByClassName() -> HTMLCollection
// document.querySelector() -> element
// document.querySelectorAll() -> nodeList


// // document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.color = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }


// pilih yang mana?
// flexible tergantung menurut method yang tepat menurut kita
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0]; // HTMLCollection
p4.style.backgroundColor = 'orange';