const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// Setup EJS
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

// Halaman Home
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

// Halaman About
app.get('/about', (req, res, next) => {  
  res.render('about', { 
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  });
});


// Halaman Contact
app.get('/contact', async (req, res) => {
  // masalahnya adalah promise jadi kita harus menggunakan then
  // Contact.find().then((contact) => {
  //   res.send(contact);
  // });

  // cara mengatasinya kita menggunakan fungsi async, jadi kita tunggu dulu sampai Promisenya resolve
  // jadi sekarang hasilya harusnya array of object
  const contacts = await Contact.find();
  res.render('contact', { 
    layout: 'layouts/main-layout', 
    title: 'Halaman Contact',
    contacts,
    msg: req.flash('msg'),
  });
});

// Route Halaman Detail Contact
app.get('/contact/:nama', async (req, res) => {
  // const contact = findContact({ nama: req.params.nama });
  const contact = await Contact.findOne({ nama: req.params.nama });
  
  res.render('detail', { 
    layout: 'layouts/main-layout', 
    title: 'Halaman Detail Contact',
    contact,
  });
});


app.listen(port, () => {
    console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
    
})