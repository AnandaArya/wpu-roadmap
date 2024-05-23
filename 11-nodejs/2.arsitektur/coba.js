// Cara menjalankan File nodejs buka terminal vscode dan tulis nama file yang ingin dijalankan
// node arsitektur

// synchronous
// const getUserSync = (id) => {
//     const nama = id === 1 ? 'Ananda' : 'Arya';
//     return { id , nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello Word';
// console.log(halo);

// { id: 1, nama: 'Ananda' }
// { id: 2, nama: 'Arya' }
// Hello Word



// Asynchronous
const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000
    setTimeout(() => {
        const nama = id === 1 ? 'Ananda' : 'Arya';
        callback({ id, nama })
    }, time)
};

// Callback jadi saat kita minta user data 1, kita tambahkan idnya dan callback
// callback adalah sebuah fungsi yang dijalankan ketika fungsi luarnya dijalankan
const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Hello Word';
console.log(halo);

// Hello Word
// { id: 2, nama: 'Arya' }
// { id: 1, nama: 'Ananda' }

