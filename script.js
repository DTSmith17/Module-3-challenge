function generatePassword() {
    var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
    
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return;
    }
  
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
    
    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
      alert("Please select at least one character type.");
      return;
    }
  
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    var availableChars = "";
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumeric) availableChars += numericChars;
    if (includeSpecial) availableChars += specialChars;
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }
  
    return password;
  }
  
  
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  };
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  