// Logic Test Biggest Number
var maxRedigit = function (number) {
    // apabila angka lebih kecil dari 0 atau bilangannya negatif maka return nulll 
    if(number <= 0) {
        return null;
    } else {
        // pecah nilai argumen menjadi array (digit)
        let array =  Array.from(String(number), Number);
        
        let sortArray = array.slice().sort();
        for (let i = 0; i < sortArray.length - 1; i++) {
            // cek kondisi apakah ada duplikat nomor maka return null. jika tidak urutkan berdasarkan yang terbesar
            if (sortArray[i + 1] == sortArray[i]) {
                return null;
            } else {
                return highToLow = array.sort((a, b) => b-a);;
            }
        }
        
    }
}

maxRedigit(321); // 321
maxRedigit(231); // 321
maxRedigit(321); // 321

maxRedigit(-1); // null
maxRedigit(0); // null
maxRedigit(99); // null
maxRedigit(1000); // null