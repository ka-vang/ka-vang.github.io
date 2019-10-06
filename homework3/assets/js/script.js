var generate = document.getElementById("generate");
var copy = document.getElementById("copy");

var numeric = '1234567890';
var special = '~!@#$%^&*()_+';
var lower = 'qwertyuiopasdfghjklzxcvbnm';
var upper = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
var master = '';
var tempPassword = '';

generate.addEventListener('click', function () {
  
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert ('Try again. Password must contain 8-128 characters.')
    }
    else {
    var userSpecial = confirm ("Click OK to confirm including special characters.");
    var userNumber = confirm ("Click OK to confirm including numeric characters.");
    var userLower = confirm ("Click OK to confirm including lowercase characters.");
    var userUpper = confirm ("Click OK to confirm including uppercase characters.");
  }

  if (userSpecial) {
    master = master + special;
  }

  if (userNumber) {
    master = master + numeric;
  }

  if (userLower) {
    master = master + lower;
  }

  if (userUpper) {
    master = master + upper;
  }

  for (var i = 0; i < passwordLength; i ++) {
    tempPassword = tempPassword + master.charAt (Math.floor(Math.random() * Math.floor(master.length)));
  }

  document.getElementById("password").value = tempPassword;

})

copy.addEventListener('click', function () {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert('Your password has been copied.');
})