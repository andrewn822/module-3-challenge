// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min , max) {
  if (!max) {
    max = min
    min = 0

  } 
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}



function generatePassword() {
  
  var userInput = window.prompt("enter a number between 8-128")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) { 
    window.alert("Password length must be between 8-128!")
    return
  }

  var wantLower = window.confirm("use lower?")
  var wantUpper = window.confirm("use upper?")
  var wantNumber = window.confirm("use number?")
  var wantSymbol = window.confirm("use symbol?")


  var lowerList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upperList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  var symbolList = ['`', '~', '!', '@', '#', '$', '%', '^']

  var optionCart = []

  if (wantLower === true) {
    optionCart.push(lowerList)
  }

  if (wantUpper === true) {
    optionCart.push(upperList)
  }

  if (wantNumber === true) {
    optionCart.push(numberList)
  }

  if (wantSymbol === true) {
    optionCart.push(symbolList)
  }

  if (optionCart.length === 0) {
    optionCart.push(lowerList)

  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomItem = getRandomItem(optionCart)
    var randomChar = getRandomItem(randomItem)
    generatePassword += randomChar
  }


  return generatePassword


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
