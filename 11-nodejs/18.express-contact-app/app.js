const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact, cekDuplikat } = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts); // third party Middlware
app.use(express.static('public')); // Built-in middleware
app.use(express.urlencoded({ extended: true })); // Built-in middleware

// Konfigurasi Flash
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());


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

// Route Halaman Daftar Contact
app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact', { 
    layout: 'layouts/main-layout', 
    title: 'Halaman Contact',
    contacts,
    msg: req.flash('msg'),
  });
});

// Route Halaman form tambah Contact
app.get('/contact/add', (req, res) => { 
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout'
  })
});

// Route Proses Tambah Data Contact
app.post('/contact', [
      body('nama').custom((value) => {
        const duplikat = cekDuplikat(value);
        if(duplikat) {
          throw new Error('Nama contact sudah terdaftar!');
        }
        return true;
      }),
      check('email', 'Email tidak valid').isEmail(),
      check('nohp', 'NO HP tidak valid').isMobilePhone('id-ID'),
  ], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    res.render('add-contact', {
      title: 'Form Tambah Data Contact',
      layout: 'layouts/main-layout',
      errors:  errors.array(),
    })
  } else {
    addContact(req.body);
    // kirimkan flash message
    req.flash('msg', 'Data contact berhasil ditambahkan!');
    res.redirect('/contact');
  }
}); 


// Route Halaman Detail Contact
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