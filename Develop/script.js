// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  let pwSize = 0
  let possibleCharacters = []
  const specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
  const numbersPass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  while (parseInt(pwSize) < 8 || parseInt(pwSize) >128){
    pwSize = prompt("Please enter a password length between 8 and 128")
    if (parseInt(pwSize) <8 || parseInt(pwSize)>128){
      pwSize = prompt("Please choose a number 8 and 128")
    } else if (pwSize == "" || Number.isNaN(parseInt(pwSize))) {
      pwSize = prompt("Please pick a valid number between 8 and 128")
    }
  }
  const upperCaseChoice = confirm("Would you like uppercase letters in your password?")
    if(upperCaseChoice == true){
     possibleCharacters = possibleCharacters.concat(upperCase)
    }

  const lowerCaseChoice = confirm("Would you like uppercase letters in your password?")
    if(lowerCaseChoice == true){
     possibleCharacters = possibleCharacters.concat(lowerCase)
    }

  const specialCharacterChoice = confirm("Would you like uppercase letters in your password?")
    if(specialCharacterChoice == true){
     possibleCharacters = possibleCharacters.concat(specialCharacters)
    }
  
  const numbersChoice = confirm("Would you like uppercase letters in your password?")
    if(numbersChoice == true){
     possibleCharacters = possibleCharacters.concat(numbersPass)
    }
  
  //for loop - i=0, n=possibleCharacters.length; i<parsenInt(pwSize;i++)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);