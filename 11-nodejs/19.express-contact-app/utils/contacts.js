const fs = require('fs');

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

// ambil semua data di contact.json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer); 
    return contacts;
}

// cari contact berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact();
    
    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    );
    return contact;
}

// menuliskan atau menimpa file contact.json dengan data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

// menambahkan data contact baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);
}

// cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.nama === nama);
}

// Hapus Contact
const deleteContact = (nama) => {
    const contacts = loadContact();
    // kita mencari object baru tanpa kontak yang kita pilih
    const filteredContacts = contacts.filter((contact) => contact.nama !== nama);
    console.log(filteredContacts);

    // lalu kita kita timpa dengan Contact yang sudah difilter
    saveContacts(filteredContacts);
    
}

// Mengubah contact

const updateContacts = (contactBaru) => {
    const contacts = loadContact();
    // hilangkan contact lama yang namanya sama dengan oldNama
    const filteredContacts = contacts.filter((contact) => contact.nama !== contactBaru.oldNama);
    // hapus dulu
    delete contactBaru.oldNama;
    // tambahkan
    filteredContacts.push(contactBaru);
    // lalu timp
    saveContacts(filteredContacts);
}


module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts };