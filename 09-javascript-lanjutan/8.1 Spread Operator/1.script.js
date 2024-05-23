// Spread Operator & Rest Parameter
// ini di representasikan dengan ...

// Spread Operator
// "Memecah (expand / unpack) iterables menjadi single elements"

// const mhs = ['Ananda', 'Doddy', 'Erik'];
// console.log(...mhs);
// console.log(...mhs[0]);

// Kapan kita menggunakan Spread Operator? 
// Menggabungkan 2 array
// const mhs = ['Ananda', 'Doddy', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];

// // Spread operator lebih flexible
// // const orang = [...mhs, ...dosen];
// const orang = [...mhs, 'Aji', ...dosen];
// // Menggabungkan array menggunakan method concat
// // const orang = mhs.concat(dosen);1

// console.log(orang);

// meng-copy array
// const mhs = ['Ananda', 'Doddy', 'Erik'];
// // ini salah tidak benar-benar mencopy arraynya (cuma melakukan referensi)
// // const mhs1 = mhs;
// // cara benar menggunakan spread operator
// const mhs1 = [...mhs];
// console.log(mhs);


// contoh lain
// const liMhs = document.querySelectorAll('li');

// cara manual atau biasa
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// karena querySelectorAll bentuknya nodeList gak bisa kita map karena dia bukan array
// const mhs = liMhs.map(m => m.textContent);
// maka kita ubah dia menjadi array menggunakan spread
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;





