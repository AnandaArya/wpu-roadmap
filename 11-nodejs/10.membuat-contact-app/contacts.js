const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// membuat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contact.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Untuk menghindari Callback hell kita bisa menggunakan Async await, 
// Async await hanya bisa kita lakukan jika kita berhadapan dengan Promise, jadi kita harus ubah Questionnya dulu dalam bentuk Promise
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (data) => {
            resolve(data);
        });
    });
};

const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp }
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer); 

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('Terimakasih telah memasukan data');

    rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };

