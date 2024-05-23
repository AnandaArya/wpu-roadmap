const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts); // third party Middlware
app.use(express.static('public')); // Built-in middleware

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Ananda Arya',
      email: 'ananda@gmail.com',
    },
    {
      nama: 'Erik',
      email: 'erik@gmail.com',
    },
    {
      nama: 'Doddy Ferdiansyah',
      email: 'doddy@gmail.com',
    },
  ];
  res.render('index', { 
    layout: 'layouts/main-layout',
    nama: 'Ananda Arya', 
    title: 'Halaman Home',
    mahasiswa
  });
});

app.get('/about', (req, res, next) => {  
  res.render('about', { 
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  });
});

app.get('/contact', (req, res) => {

  const contacts = loadContact();
  res.render('contact', { 
    layout: 'layouts/main-layout', 
    title: 'Halaman Contact',
    contacts,
  });
});

app.get('/contact/:nama', (req, res) => {

  const contact = findContact(req.params.nama);
  res.render('detail', { 
    layout: 'layouts/main-layout', 
    title: 'Halaman Detail Contact',
    contact,
  });
});

app.get('/product/:id', (req, res) => {
  res.send(`Produk ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404 Page Not Found </h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});