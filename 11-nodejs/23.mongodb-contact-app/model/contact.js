const mongoose = require('mongoose');

// Membuat Schema
// Parameter pertamanya nama modelnya, parameter kedua isinya object di isi dengan field yang kita ingin isi ke dalam collection contactnya
// secara otomatis nanti akan dibuatkan nama plural collectionnya contacts, karena anam modalnya singular (Contact) ini mirip laravel lah ya
const Contact = mongoose.model('Contact', {
    nama: {
      type: String,
      required: true,
    },
    nohp: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    }
  });
  

module.exports = Contact;