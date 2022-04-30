// Assignment code here

var getPwdLength = function() {

  var passwordLength = prompt("How many characters will your password contain?");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  //debugger;
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("A strong password requres a length between 8 and 128 characters, please enter a number between 8 and 128:");
    return getPwdLength();
  } else {
    alert("Excellent, you requested a " + passwordLength + " character password!");
    return passwordLength;  
  }
  
} 


var getPwdLower = function() {

  var lowerCase = prompt("Would you like to include lower case characters (yes or no)?")
  lowerCase = lowerCase.toLowerCase();
  console.log(lowerCase);
  if (lowerCase != "yes" && lowerCase != "no") {
    alert("Please tell me if you'd like to use lower case characters in your password, type either yes, or no:");
    return getPwdLower();
  } else {
    alert("Excellent, you answered " + lowerCase + " to having lower case characters");
    return lowerCase;
  }

}


var getPwdUpper = function() {

  var upperCase = prompt("Would you like to include upper case characters (yes or no)?")
  upperCase = upperCase.toLowerCase();
  console.log(upperCase);
  if (upperCase != "yes" && upperCase != "no") {
    alert("Please tell me if you'd like to use upper case characters in your password, type either yes, or no:");
    return getPwdUpper();
  } else {
    alert("Excellent, you answered " + upperCase + " to having upper case characters");
    return upperCase;
  }

}


var getPwdNumeric = function() {

  var numericCharacters = prompt("Would you like to include numeric characters (yes or no)?")
  numericCharacters = numericCharacters.toLowerCase();
  console.log(numericCharacters);
  if (numericCharacters != "yes" && numericCharacters != "no") {
    alert("Please tell me if you'd like to use numeric characters in your password, type either yes, or no:");
    return getPwdNumeric();
  } else {
    alert("Excellent, you answered " + numericCharacters + " to having numeric case characters");
    return numericCharacters;
  }

}


var getPwdSpecial = function() {

  var specialCharacters = prompt("Would you like to include special characters (yes or no)?")
  specialCharacters = specialCharacters.toLowerCase();
  console.log(specialCharacters);
  if (specialCharacters != "yes" && specialCharacters != "no") {
    alert("Please tell me if you'd like to use special characters in your password, type either yes, or no:");
    return getPwdSpecial();
  } else {
    alert("Excellent, you answered " + specialCharacters + " to having special characters");
    return specialCharacters;
  }

}


var start = function() {

  alert("Hello, I will generate a strong password for you. But first, I have a few question. Let's get started!");

  // creating password requirements object
  var pwReq = {
    length: getPwdLength(),
    lower: getPwdLower(),
    upper: getPwdUpper(),
    numeric: getPwdNumeric(),
    special: getPwdSpecial()
  }
  console.log("Password Req Length: " + pwReq.length);
  console.log("Password Req lower: " + pwReq.lower);
  console.log("Password Req upper: " + pwReq.upper);
  console.log("Password Req numeric: " + pwReq.numeric);
  console.log("Password Req special: " + pwReq.special);
  console.log(pwReq);
}

















// Provided content starts here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//passwordRequirements();