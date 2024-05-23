// Fnction Declaration
// function identifier/nama (ParameterList optional/boleh ada atau tidak) {FunctionBody}
// Function Expression
// function identifier optional (ParameterList optional) {FunctionBody}

// function decleration
function tampilPesan(nama) {
    alert('halo' + nama);
}
//tampilPesan(Arya);

//akan menjadi function expression ketika dia kita simpan dalam sebuah variable
var tampilPesan = function(nama) {
                    alert('halo' + nama);
}

//Function Declaration
//Lebih Fleksibel(dapat ditulis dimanapun)
    //karena konsep hoisting
//mudah dipahai pemula

//Function Expression
//Harus didefinisikan terlebih dahulu sebelum dipanggil
//lebih powerfull
    //Sebagai closure
    //Sebagai argumen untuk function lain
    //IIFFE (Immediately Invoked Function Expression)

//pilih yang mana?
//declaration vs expression = sama aja silahkan pilih gak masalah 
//function expression lebih digunakan javascript lanjut dan lebih moder 

