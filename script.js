var generateBtn = document.querySelector("#generate");



function generatePassword() {


//  Set password length and character types
let passLength = prompt("Select your password lenght (between 8 and 128 characters)");
var passCharlc = prompt("Would you like to use lower case letters?  yes / no");
var passCharuc = prompt("Would you like to use UPPER case letters?  yes / no");
var passCharnum = prompt("Would you like to use numbers?  yes / no");
var passCharspec = prompt("Would you like to use special characters?  yes / no");
let values = "";
let password = "";

// determine character set to use for password
    if (passCharlc === "yes")   {
        let values = values + "abcdefghijklmnopqrstuvwxyz";
    }
    if (passCharuc === "yes")   {
        let values = values + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passCharnum === "yes")  {
        let values = values + "1234567890";
    }
    if (passCharspec === "yes") {
        let values = values + "!@#$%^&*_=+-/.?<>)";
    }


// create a loop to choose password characters
for (var i=0; i<=passLength; i++) {
    password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length -1)))
;}


// display password in card-body
document.getElementById("card-body").values = password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
