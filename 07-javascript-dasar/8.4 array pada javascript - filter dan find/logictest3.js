// Logic Test Alternate Case
var alternateCase = function(string){
    var newString = "";
    for(var i = 0; i<string.length; i++){
        // apabila nilai argumen sama dengan huruf kecil maka ubah menjadi huruf kapital dan sebaliknya
        if(string[i] === string[i].toLowerCase()){
            newString += string[i].toUpperCase();
        }else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}

alternateCase("abc"); // ABC
alternateCase("ABC"); // abc
alternateCase("Hello World"); // hELLO wORLD



