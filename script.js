// initiate selection of password criteria
    
    // select the length of the password
    
    var passLenght = prompt("Select your password length (between 8 and 128 characters)");
    
    
    // select the character types

    var passCharlc = prompt("Would you like to use lower case letters?  yes / no");
    var passCharuc = prompt("Would you like to use UPPER case letters?  yes / no");
    var passCharnum = prompt("Would you like to use numbers?  yes / no");
    var passCharspec = prompt("Would you like to use special characters?  yes / no");
    var passString = "";


    // validate selection of character types
    if passCharlc === "yes", let passString = passString + "abcdefghijklmnopqrstuvwxyz";
    if passCharuc === "yes", let passString = passString + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if passCharnum === "yes", let passString = passString + "1234567890";
    if passCharspec === "yes", let passString = passSting + "!@#$%^&*_=+-/.?<>)";

    // generate random password using selected criteria

// Here we are using random() method of util 
<script type="text/javascript">
// Loop 10 times
for (var i = 0; i < 10; i++) {
  // Generate a random number between 1 and 10
  // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
  var num = Math.floor(Math.random() * 10) + 1;

  // Display in console
  console.log(num);
}
</script>

    // display password in card-body




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
