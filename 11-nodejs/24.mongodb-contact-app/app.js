const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check } = require('express-validator');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// Setup Method-override
app.use(methodOverride('_method'));

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

// Route Halaman form tambah Contact
app.get('/contact/add', (req, res) => { 
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout'
  })
});

// Route Proses Tambah Data Contact
app.post('/contact', [
  body('nama').custom(async (value) => {
    const duplikat = await Contact.findOne({ nama: value });
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
    Contact.insertMany(req.body, (error, result) => {
      // kirimkan flash message
      req.flash('msg', 'Data contact berhasil ditambahkan!');
      res.redirect('/contact');
    });
  }
});

// Route Proses hapus data contact
// app.get('/contact/delete/:nama', async (req, res) => {
//   const contact = await Contact.findOne({ nama: req.params.nama });
//   // jika contact tidak ada
//   if(!contact) {
//     res.status(404);
//     res.send('<h1>404 Not Found</h4>');
//   } else {
//     Contact.deleteOne({ _id: contact._id }).then((result) => {
//       req.flash('msg', 'Data contact berhasil dihapus!');
//       res.redirect('/contact');
//     });
//   }
// });

app.delete('/contact', (req, res) => {
  Contact.deleteOne({ nama: req.body.nama }).then((result) => {
    req.flash('msg', 'Data contact berhasil dihapus!');
    res.redirect('/contact');
  });
});

// Route Halaman form edit data Contact
app.get('/contact/edit/:nama', async (req, res) => { 
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render('edit-contact', {
    title: 'Form Ubah Data Contact',
    layout: 'layouts/main-layout',
    contact,
  });
});

// Route Proses Ubah Data
app.put('/contact', [
  body('nama').custom(async (value, { req }) => {
    const duplikat = await Contact.findOne({ nama: value });
    // cek dulu nama harus tidak sama dengan nama lama dan duplikat
    if(value !== req.body.oldNama && duplikat) {
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
    res.render('edit-contact', {
      title: 'Form Ubah Data Contact',
      layout: 'layouts/main-layout',
      errors:  errors.array(),
      contact: req.body,
    });
  } else {
    Contact.updateOne(
      { _id: req.body._id },
      {
        $set: {
          nama: req.body.nama,
          email: req.body.email,
          nohp: req.body.nohp,
        },
      }
    ).then((result) => {
      // kirimkan flash message
      req.flash('msg', 'Data contact berhasil diubah!');
      res.redirect('/contact');
    });
    }
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