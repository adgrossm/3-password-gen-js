
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','W','Z'];
var specialChar = ['~','!','@','#','$','%','^','&','*','(',')','/','<','>','?'];

var pickedCharArr = []
var passwordString = ''

function generatePassword(){
// asks user to input the number of characters in their password and returns an alert if they don't have 8 to 128 characters inputed
  var numberOfCharacters = parseInt(prompt("How many characters would you like in your password?"))
  console.log(numberOfCharacters)
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert ("Your password must be between 8 and 128 characters.");
   var numberOfCharacters = parseInt(prompt("Please enter a number between 8 & 128"))
    
  }
// after they select the # of characters we ask them what type of characters, upper, lower, #, special
if (confirm("Would you like lowercase letters?")){
pickedCharArr.push(lowerCase)
}

if (confirm("Would you like uppercase letters?")){
  pickedCharArr.push(upperCase)
}

if (confirm("Would you like numbers?")){
  pickedCharArr.push(numbers)
}

if (confirm("Would you like special characters?")){
  pickedCharArr.push(specialChar)
}
// shows this alert if the user doesn't select at least one character type
else if (pickedCharArr.length === 0){
  alert("You must select at least one character type.")
  return ''
}  
//   
// not sure how to loop the if (confirm) alerts if they don't select at least one character type unless they click the Generate Password button again.
console.log(numberOfCharacters, pickedCharArr)

// for loop to run through picking randoms characters based on the length the user inputed for the variable numberOfCharacters
// not sure if this is setup properly since it seems

for (var i = 0; i < numberOfCharacters; i++){
  var randomNum = Math.floor(Math.random() * pickedCharArr.length);
  var randomCharNum = Math.floor(Math.random() * pickedCharArr[randomNum].length);
  var password = pickedCharArr[randomNum][randomCharNum]
  passwordString += password
  console.log(randomNum, randomCharNum, password)
}

return passwordString

 }
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



