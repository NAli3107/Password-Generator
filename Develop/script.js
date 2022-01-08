// Assignment Code

var generateBtn = document.querySelector("#generate");

//function to create password
function generatePassword(){
  let pwSize = 0
  let possibleCharacters = []

  // arrays for all potential password options
  const specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
  const numbersPass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  // while loop to prompt user to input correct password length
  while (parseInt(pwSize) < 8 || parseInt(pwSize) >128 || Number.isNaN(parseInt(pwSize))){
    pwSize = prompt("Please enter a password with a length between 8 and 128.")
  }

  // conditional statements for character type prompts with boolean datatype
  const upperCaseChoice = confirm("Would you like uppercase letters in your password?")
    if(upperCaseChoice == true){
     possibleCharacters = possibleCharacters.concat(upperCase)
    }

  const lowerCaseChoice = confirm("Would you like lowercase letters in your password?")
    if(lowerCaseChoice == true){
     possibleCharacters = possibleCharacters.concat(lowerCase)
    }

  const specialCharacterChoice = confirm("Would you like special characters in your password?")
    if(specialCharacterChoice == true){
     possibleCharacters = possibleCharacters.concat(specialCharacters)
    }
  
  const numbersChoice = confirm("Would you like numbers in your password?")
    if(numbersChoice == true){
     possibleCharacters = possibleCharacters.concat(numbersPass)
    }
   
  // for loop with method to randomize the selection of user's chosen number of characters
    let result = ""
    for (let i = 0, n=possibleCharacters.length; i<parseInt(pwSize); i++) {
      result += possibleCharacters[Math.floor(Math.random()*n)]
  }
  return result;
}

// function to display generated password onto the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
