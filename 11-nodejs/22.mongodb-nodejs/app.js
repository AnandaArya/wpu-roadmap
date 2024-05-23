const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if(error) {
        return console.log('Koneksi gagal!');
    }

    // pilih database
    const db = client.db(dbName);

    // Menambahkan 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Erik',
    //         email: 'erik@gmail.com'

    //     },
    //     (error, result) => {
    //         if(error) {
    //             return console.log('gagal menambahkan data!');
    //         }

    //         console.log(result);
    //     }
    // )

    // Menambahkan lebih dari 1 data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Fexi',
    //             email: 'fexi@yahoo.com'
    //         },
    //         {
    //             nama: 'Avip',
    //             email: 'avip@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if(error) {
    //             return console.log('data gagal ditambahkan!');
    //         }

    //         console.log(result);
    //     }
    // );

    // Menampilkan data berdasyang ada di collection 'mahasiswa'
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find({ _id : ObjectId('626894706464f86a729bf025') })
    //     .toArray((error, result) => {
    //         console.log(result);
    //     })
    // );

    // Mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectId('626894706464f86a729bf025')
    //     },
    //     {
    //         $set: {
    //             email: 'doddy@yahoo.com',
    //         },
    //     }
    // )

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Mengubah data lebih dari 1, berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Erik'
    //     },
    //     {
    //         $set: {
    //             nama: 'Erik Doank',
    //         }
    //     },
    // )

    // Menghapus 1 data
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectId('62847e8bf2e68149a8f4e982')
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Menghapus banyak data
    // db.collection('mahasiswa').deleteMany(
    //     {
    //         nama: 'Erik Doank'
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });
});