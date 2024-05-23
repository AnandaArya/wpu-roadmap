/* tanpa menggunakan function                                                                                                          
var a = 8;
var b = 3;

var volumeA;
var volumeB;
var total;

volumeA = a * a * a;
volumeB = b * b * b;

total = volumeA + volumeB;
console.log(total);
*/

function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeDuaKubus(8,3));
alert(jumlahVolumeDuaKubus(10,3));

