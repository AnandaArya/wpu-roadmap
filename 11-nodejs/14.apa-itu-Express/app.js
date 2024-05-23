const express = require('express');
const app = express();
const port = 3000;

// req = request adalah apa yang dikirimkan ke Express
// res = response secara umum adalah nilai yang dikembalikan oleh Express 
// ketika kita mentarget path atau halaman tertentu

app.get('/', (req, res) => {
  
  // res.send('Hello World!');
  // res.json({
  //   nama : "ananda",
  //   email: "ananda@gmail.com",
  //   noHP: "0812345678"
  // });
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('Ini adalah halaman About!');
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  // res.send('Ini adalah halaman Contact!');
  res.sendFile('./contact.html', { root: __dirname });
});

app.get('/product/:id', (req, res) => {
  res.send(`Produk ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found </h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});