// Assignment code here
// Strings for supported password characters
var string = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = "0123456789".split("");
var special = "!@#$%^&*".split("");

// generatePassword function

function generatePassword(characters) {

  var password =[]

  // length prompt and recorded to console
  var length = window.prompt("How many characters do you want your password to be?");
  console.log(length);

  // length validation logic
  if(length >= 8 && length <=128) {
    var numChoice = window.confirm("Do you want to use numbers in your password?");
    console.log(numChoice);
  }

  if(numChoice) {
    password = password.concat(number);
  }
  else {
    window.alert("Please choose a password length between 8 and 128 chaarcters")
    writePassword();
  }

  //prompts for #s, upper, lower, special
var lowercase_opt = window.confirm("Do you want to allow lower case letters?");
console.log(lowercase_opt);
  if(lowercase_opt) {
    password = password.concat(string);
    console.log(password);
  }

  var upper_opt = window.confirm("Do you want to allow upper case letters?");
  console.log(upper_opt);
    if(upper_opt) {
      password = password.concat(upper)
      console.log(password);
    }
  
  var special_chars = window.confirm("Do you want to allow special characters?");
  console.log(special_chars);

  if(special_chars) {
    password = password.concat(special);
    console.log(password);
  }

  // Using math methods to help generate results
  var result="";
  for(var i = 0; i < length; i++) {
    result +=password[Math.floor(Math.random() * password.length)];
    console.log(result);
  }
  return result;
};

var generateBtn = document.querySelector("#generate");

generateBtn.disabled = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

