/* scope = lingkup variable

blcok scope vs function scope
javascript menggunakan function scope
*/

// function tes() {
//     a = 2;
// }

// tes();
// console.log(a);
// jika tidak ada deklarasi variable a maka yang terjadi javascript secara otomatis akan membuat varible global (var a) diluar function ;

//variable global / window scope
/*
var a = 1;

function tes() {
    a = 2;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}

tes();
console.log(a);
*/

/*
//variable global / window scope
var a = 1;

function tes() {
    var a = 2;
    console.log(window.a); //window.a maka yang ditampilkan adalah variable window (yang berada diluar)
}

tes();
*/

/*
"use strict"; // artinya jika kita menuslikan seperti dibawah maka otomatis dibuatkan variable lokal didalam (function)

function tes(){
    a = 2;
}

tes();
console.log


*/

var a = 1;
function tes(a) {
    console.log(a);
}

tes(2);
console.log(a);
 