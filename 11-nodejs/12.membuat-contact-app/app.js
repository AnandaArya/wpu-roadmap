const yargs = require("yargs");
const { simpanContact, listContact, detailContact, deleteContact } = require('./contacts');

yargs.command({
  command: 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string',
    },
    noHP: {
      describe: 'Nomor Handphone',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    simpanContact(argv.nama, argv.email, argv.noHP);
  }
}).demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
  command: 'list',
  describe: 'Menampilkan data nama & No HP contact',
  handler() {
    listContact();
  },
});

// menampilkan detail sebuah contact
yargs.command({
  command: 'detail',
  describe: 'Menampilkan detail dari contact',
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: 'delete',
  describe: 'Menghapus contact berdasarkan nama',
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();