// const mhs  = {
//     nama: 'Ananda Arya',
//     umur: 33,
//     nrp: '043040023',
//     email: 'ananda@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama: 'Ananda Arya',
//         emai: 'ananda@gmail.com'
//     },
//     {
//         nama: 'Erik',
//         emai: 'erik@gmail.com'
//     },
//     {
//         nama: 'Doddy',
//         emai: 'doddy@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`
// document.body.innerHTML = el;


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`
// document.body.innerHTML = el;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Ananda Arya',
    semester : 5,
    mataKuliah: [
        'Rekayasa Web', 
        'Analisis dan Perancangan Sistem Informasi', 
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`


document.body.innerHTML = el;

