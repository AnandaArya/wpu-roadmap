// Rest Parameter
// "Merepresentasikan argument pada function dengan jumlah 
// yang tidak terbatas menjadi sebuah array -MDN "

// Rest Parameter
// Rest parameter hanya bisa kita pakai di akhir dari parameternya
// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka) {
//     // menggunakan for..of
//     // let total = 0;
//     // for(const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     // menggunakan reduce
//     // return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// Array destructuring
// const kelompok1 = ['Ananda', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object destructuring
// const team = {
//     pm: 'Ananda',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// Filtering
// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('number', 1, 2, 'Ananda', false, 10, true, 'Doddy'));
// console.log(filterBy('string', 1, 2, 'Ananda', false, 10, true, 'Doddy'));
// console.log(filterBy('boolean', 1, 2, 'Ananda', false, 10, true, 'Doddy'));
