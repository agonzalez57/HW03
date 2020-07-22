// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptMe() {
  alert("New password will be generated, choose 'okay' for at least one of the following options:");
  var lcase = prompt("To include LOWERCASE letters in generated password, click 'okay', otherwise choose 'cancel'");
  var ucase = prompt("To include UPPERCASE letters in generated password, click 'okay', otherwise choose 'cancel'");
  var num = prompt("To include NUMERIC characters in generated password, click 'okay', otherwise choose 'cancel'");
  var spChar = prompt("To include SPECIAL characters in generated password, click 'okay', otherwise choose 'cancel'");
  
  function generatePassword(lcase, ucase, num, spChar) {
    let charCodes = lowercaseChar
    if (lcase == true) {
      var lowercaseChar = arrayFromLowToHigh(65, 90);

    }
    if (ucase == true) {
      var uppercaseChar = arrayFromLowToHigh(97, 122);
      
    }   
    if (num == true) {
      var numChar = arrayFromLowToHigh(48, 57);
      
    }
    if (spChar == true) {
      var specialChar = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
      
    }

    function arrayFromLowToHigh(low, high){
      var array = []
      for (let i =low; i <=high; i++) {
        array.push(i)
      }
      return array
    }
  }

  

  alert(chosenOptions);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function arrayLtoH(low,high){
  for (let i = low; i)
}






