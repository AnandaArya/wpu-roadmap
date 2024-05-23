// Tagged Templates
// "Bentuk yang lebih kompleks dari Template Literals, memungkinkan kita
// untuk membaca template literals melalui sebuah functionn. -MDN WEB Docs"


// Tagged Templates
// const nama = 'Ananda Arya';
// const umur = 33;

// function coba(strings, arg, arg2, arg3) {
//     return email;
// }

// ${nama} = ini disebut dengan expression
// ada kemungkinan ketika kita membangun sebuah string ada beberapa expression didalam template literalsnya
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

// Modern Javascript punya argumen yang namanya Rest Parameter, jadi dia bisa menampung
// seluruh expression yang ada didalam template literalsnya
// cara nulisnya adalah ...namaVariabel
// const nama = 'Ananda Arya';
// const umur = 33;
// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Mungkin kita disini merasa aneh, buat apa kita ngasilin string yang sama dengan
// kita tidak menggunakan tag templates

// Contoh implementasinya 
// Highlight
// const nama = 'Ananda Arya';
// const umur = 33;
// const email = 'ananda@gmail.com'
// function Highlight(strings, ...values) {

//     return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
// }
// const str = Highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}`;
// document.body.innerHTML = str;

// Penggunaan lain Tagged Template
// Escaping HTML Tags
// Translation & Internationalizaion (adalah alih bahasa dari website)
// Styled Components (Frontend framework, Vue, React)


// Esaping / Sanitize HTML Tags
// function sanitize(strings, ...values) {
//     return DOMPurify.sanitize(aboutMe);
// }

// const name = `petry baelish`;
// const aboutMe = `I Love to do hack <img src="http://unsplash.it/100/100?random"download="alert('I Hacked you. Haha');">`;

// const html = sanitize`
//     <h3>${name}</h3>
//     <h3>${aboutMe}</h3>
// `;

// Translation & Internationalization
// ada sebuah library bisa di cek di github i18in
// const html = i18n`Hello ${name}, you have ${amount}: c in your bank account`;
// Hallo steffen, sie haben US $ 1,250.33 auf Ihrem Bankkoto.


// Styled COmponent (ketika menggunakan React)
// const title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: blue;
// `
