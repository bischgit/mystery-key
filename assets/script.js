// Click that begins criteria questions
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Character count confirmation prompt
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  // Loop if answer is outside requirements
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat to user how many characters password will contain 
      alert(`Your password will have ${confirmLength} characters`);

    // Determine requirements of password 
    var confirmSpecialCharacter = confirm("Click OK to include special characters. Click 'Cancel' if you do NOT want to include special characters.");
    var confirmNumericCharacter = confirm("Click OK to include numeric characters. Click 'Cancel' if you do NOT want to include numeric characters.");    
    var confirmLowerCase = confirm("Click OK to include lowercase characters. Click 'Cancel' if you do NOT want to include lowercase characters.");
    var confirmUpperCase = confirm("Click OK to include uppercase characters. Click 'Cancel' if you do NOT want to include uppercase characters.");
      // Loop if answer is outside requirements
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to include special characters. Click 'Cancel' if you do NOT want to include special characters.");
        var confirmNumericCharacter = confirm("Click OK to include numeric characters. Click 'Cancel' if you do NOT want to include numeric characters.");    
        var confirmLowerCase = confirm("Click OK to include lowercase characters. Click 'Cancel' if you do NOT want to include lowercase characters.");
        var confirmUpperCase = confirm("Click OK to include uppercase characters. Click 'Cancel' if you do NOT want to include uppercase characters.");   
    } 

      // Assigned action to password requirements
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

  

   // Empty string for input based on "for" loop selecting random characters from the array
   var randomPassword = "";
      
   for (var i = 0; i < confirmLength; i++) {
     randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
     console.log(randomPassword);
   }
   return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}