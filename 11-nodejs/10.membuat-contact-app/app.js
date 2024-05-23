// ======================================================
// 1. Cara Pertama 
// const pertanyaan1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan nama anda : ', (nama) => {
//             resolve(nama);
//         });
//     });
// };

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukan email anda : ', (email) => {
//             resolve(email);
//         });
//     });
// };

// const main = async () => {
//     const nama = await pertanyaan1();
//     const email = await pertanyaan2();
    
//     const contact = { nama, email }
//     const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(fileBuffer); 

//     contacts.push(contact);

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//     console.log('Terimakasih telah memasukan data');

//     rl.close();
// }
// main();

// ====================================================

// Tanpa Object Destructuring
const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukan nama anda :');
    const email = await contacts.tulisPertanyaan('Masukan email anda :');
    const noHp = await contacts.tulisPertanyaan('Masukan noHp anda :');

    contacts.simpanContact(nama, email, noHp)
}
main();

// Menggunakan Object distructuring
// const { tulisPertanyaan, simpanContact } = require('./contacts');

// const main = async () => {
//     const nama = await tulisPertanyaan('Masukan nama anda :');
//     const email = await tulisPertanyaan('Masukan email anda :');
//     const noHp = await tulisPertanyaan('Masukan noHp anda :');

//     simpanContact(nama, email, noHp)
// }
// main();



