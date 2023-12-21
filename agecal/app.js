let dobInput = document.getElementById("dob");
let calculateBtn = document.getElementById("calculate-btn");
let resultDiv = document.getElementById("result");


calculateBtn.addEventListener("click", function(){

    let dob = new Date(dobInput.value);
    let ageInMs = Date.now() - dob.getTime();
    let ageDate = new Date(ageInMs);
    let age = Math.abs(ageDate.getFullYear() - 1970);

    resultDiv.innerHTML = `Your Age Is : ${age} Years`;










});
