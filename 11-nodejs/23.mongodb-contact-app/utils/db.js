const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Membuat Schema
// // Parameter pertamanya nama modelnya, parameter kedua isinya object di isi dengan field yang kita ingin isi ke dalam collection contactnya
// // secara otomatis nanti akan dibuatkan nama plural collectionnya contacts, karena anam modalnya singular (Contact) ini mirip laravel lah ya
// const Contact = mongoose.model('Contact', {
//   nama: {
//     type: String,
//     required: true,
//   },
//   nohp: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//   }
// });


// // Menambah 1 data
// const contact = new Contact({
//   nama: 'Doddy Ferdiansyah',
//   nohp: '0818877665',
//   email: 'doddy@gmail.com',
// });

// // Simpan ke collection
// contact.save().then((contact) => console.log(contact));
