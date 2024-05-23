// "Template literal adalah string literal yang memungkinkan adanya expression di dalamnya -MDN"

// String Literal
// let nama = 'Ananda';
// let nrp= "043210023";

// let email = `anandaarya@gmail.com`; //back tick
// memungkinkan kita membuat Template Literal
// Multi-line String
// Embedded Expression
// HTML Fragments
// Expression interpolation
// Tagged Template

// Template Literals 
// multi-line string (enter atau baris baru tanpa harus menutup dulu stringnya dan melakukan concatenasi)
// `string text baris 1
// string text baris 2
// string text baris 3`

// `string text ${XPathExpression} string text`
// tag `string text ${expression} string text`

// Contoh Multi-line String
console.log('string \nstring 2');
console.log(`string 1
            string 2`);

// Multi-line String (HTML Fragments) (1)
// menggunakan '' biasa

// let el = '';
// el += '<div class="mhs">';
// el += '<h2>'  + MessageChannel.nama + '</h2>';
// el += '<span class="nrp">' + MessageChannel.nrp + '</span>';
// el += '</div';
// console.log(el);

// Multi-line String (HTML Fragments) (1)
// menggunakan `` (backtic) biasa

// let el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class ="nrp">${mhs.nrp}</span>
// </div>`;
// console.log(el);


// Embedded Expression
// const nama = 'Ananda Arya';
// let umur = 33;
// console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);
// console.log(`${1 + 1}`);
// console.log(`${alert('Hello ')}`);
// ternany
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);



// Expression Interpolation (1) '' biasa
// let a = 10;
// let b = 15;
// console.log('Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah :' + (a + b));


// Expression interpolation (2) Template literals
// let a = 10;
// let b = 15;
// console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah ${a + b}`);












