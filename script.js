// Assignment Code
var generateBtn = document.querySelector("#generate");
const uppercaseValues = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowercaseValues = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numberValues = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const symbolsValues = ['`', '~', '!', '@', '#', '$', '%', '^']
let characterAmount;
let includeUpper;
let includeLower;
let includeNumbers;
let includeSymbols;
let tryAgain;
let passwordLength; 


function generatePassword() {
  let characterAmount = parseInt(window.prompt('enter a number between 8-128'));





}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
