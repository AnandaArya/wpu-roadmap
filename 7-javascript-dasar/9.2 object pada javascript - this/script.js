// this (setiap kita membikin function atau object otomatis akan ada keyword this)
// this = object global 
// var a = 10;
// console.log(window.a);

// properti = adalah variabel yang ada didalam objek
// method = function yang ada didalam objek
// // membuat object

// cara 1 function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
//this mengembalikan object global

// cara 2 -  object literal 
var obj = {a:10, nama: "Ananda Arya"};
obj.halo = function() {
    console.log(this);
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('hello');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
