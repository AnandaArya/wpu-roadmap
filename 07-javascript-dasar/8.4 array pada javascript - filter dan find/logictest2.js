// Logic Test Map Array data
var productArray = function (array) {
    let resultArray = [];
    
    for(let i = 0; i < array.length; i++) {
        let product = 1;

        // looping berdasarkan panjang index array
        // lalu kita bandingkan nilai i apakah sama dengan j apabila tidak sama maka lanjut
        for(let j = 0; j < array.length; j++) {
            if(i !== j) {
                product = product * array[j];
            }
        }
        // kita tambah atau simpan hasil tadi ke dalam resultArray
        resultArray.push(product);
    }
    return resultArray;
}

productArray([12,20]);           // [20,12]
productArray([3,27,4,2]);        // [216,24,162,324]
productArray([13,10,5,2,9]);     // [900,1170,2340,5850,1300]
productArray([16,17,4,3,5,2]);   // [2040,1920,8160,10880,6528,16320]