// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialCharacters = ['`', '~', '!', '@', '#', '$', '%', '^']

function generatePassword () {

  userInput = parseInt(window.prompt('Please enter the length of your password between 8-128 characters'));

  if (!userInput) {
    return;
  }

  if (userInput < 8) {
    alert('Please enter a number greater than 8');
    return;
    }
  
    if (userInput > 128) {
      alert('Please enter a number less than 128')
      return;
    } else {
      window.prompt('Do you want your password to include lower cases?')
      window.prompt('Do you want your password to include upper cases?')
      window.prompt('Do you want your password to include numbers?')
      window.prompt('Do you want your password to include special characters?')
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);