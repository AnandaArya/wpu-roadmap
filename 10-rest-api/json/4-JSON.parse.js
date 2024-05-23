// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = this.responseText;
//         console.log(mahasiswa);
        
//     }
// }
// xhr.open('GET', 'json/coba.json', true);
// xhr.send();

$.getJSON('coba.json', function(data) {
    console.log(data);
    
});