const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('ananda@gmail.c'));
// console.log(validator.isMobilePhone('08012345678', 'id-ID'));
// console.log(validator.isNumeric('08012345678a'));

console.log(chalk.blue.bgBlue.italic('hello World!'));

const nama = 'Ananda Arya';
const pesan = chalk`Lorem ipsum dolor {bgGreen.black.bold sit amet} consectetur {bgGreen.italic.black adipisicing} elit, Nama saya : ${nama}`;
console.log(pesan);
