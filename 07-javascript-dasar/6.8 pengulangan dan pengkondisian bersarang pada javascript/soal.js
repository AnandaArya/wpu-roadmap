var x = prompt('Masukan nilai x');
var y = prompt('Masukan nilai y');
var year = prompt('Masukan nilai tahun');


var nilai1 = parseInt(x);
var nilai2 = parseInt(y);
var hasil1 = 0
var hasil2 = 0
// var sisaBagi = (nilai1 + nilai2) / 2
for(var i = 1; i <= year; i++) {
  if(i % nilai1 == 0) {
    hasil1 += 1;
  } 
}
for(var i = 1; i <= year; i++) {
  if(i % nilai2 == 0) {
    hasil2 += 1;
  } 
}

var total1 = parseFloat(hasil1) / 2;
var total2 = parseFloat(hasil2) / 2;
var final = total1 + total2

alert(final);

// var total = (hasil1 / 2) + (hasil2 / 2) 


// alert((hasil1 / 2) +" "+ (hasil2 / 2))

// var temp = 0;
// for(var i = 0; i <= year; i++) {
//   if(i % 4 == 0){
//     temp += 1;
//   }
//   return temp
// }