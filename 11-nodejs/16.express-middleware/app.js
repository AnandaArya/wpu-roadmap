const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
// third party Middlware
// ejs-layouts
app.use(expressLayouts);
// Morgan
app.use(morgan('dev'));


// Built-in middleware
app.use(express.static('public'));

// Application-level middleware
app.use((req, res, next) => {
  console.log('Time :', Date.now());
  next();
});


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
  res.render('contact', { 
    layout: 'layouts/main-layout', 
    title: 'Halaman Contact'
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