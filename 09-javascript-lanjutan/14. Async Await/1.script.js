// Asynchronous functon
// "Sebuah function yang bekerja secara asyncronous (melalui event loop), yang menghasilkan
// (implitsit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan
// penulisan yang syncronous (standard) -MDN"

// Asynchronous Function
// Fungsi yang berjalan secara asynchronous
// Menghasilkan (implisit) promise
// Cara penulisannnya sama seperti synchronous function (function biasa)

// Asynchronous Function
// "Sebuah async function dapat memiliki keyword await didalamnya untuk memberhentikan
// sementara eksekusi fungsinya sambil menunggu promise-nya selesai. -MDN"
// Keyword Await hanya bisa berjalan ketika functionnya kita kasih Async didalamnya


// var coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });
// coba.then(() => console.log(coba));

// function cobaPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('selesai')
//         }, 2000);
//     });
// }

// const coba = cobaPromise();
// console.log(coba);


// // Kalau mau kita ubah ke Async dan Awaiat jadi kita butuh untuk memanggil function yang diatas
// async function cobaAsync() {
//     // jadi kita tambahkan Keyword Await untuk memberi tahu Javascript kalau inilah yang Asynchronous
//     // jadi sebelum dijalankan kita tunggu dulu sebelum Promisenya resolve
//     const coba = await cobaPromise();
//     console.log(coba);
// }

// cobaAsync();


// Cara melakukan Error Handling pada Script Async dan Await kita 
// resolve bisa di tangkap dengan method then(), dan kalau gagal kita punya reject yang ditangkap
// oleh method catch()
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('terlalu lama!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

// Kita tidak bisa pakai then di Async function ini
// yang kita jalankan ketika Promisenya resolve, jadi ketika await asumsinya Promisenya resolve
// Kalau reject maka tidak dijalankan (unchaught (in Promise))
// Kalau pakai Async dan Await kita bisa menggunakan try and catch
async function cobaAsync() {
    // Try untuk then() dan catch untuk catch
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(error) {
        // console.log(error);
        console.error(error);
        
    }
}
cobaAsync();




