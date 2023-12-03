let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

let lengthEl = document.getElementById("lenght");
let lowercaseEl = document.getElementById("lowercase");
let uppercaseEl = document.getElementById("uppercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");
let genrateBtn = document.getElementById("generate");
let passwordEl = document.getElementById("password");

genrateBtn.addEventListener("click", function(){


    let length = lengthEl.value;
    let characters = "";
    let password = "";

    if (lowercaseEl.checked){
        characters += lowercaseLetters;
    }

    if (uppercaseEl.checked){
        characters += uppercaseLetters;
    }
    
    if (numbersEl.checked){
        characters += numbers;
    }
    
    if (symbolsEl.checked){
        characters += symbols;
    }
    
    for (let i = 0; i < length; i++){

        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = password;


});