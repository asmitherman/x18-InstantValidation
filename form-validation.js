function validateUsername(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length > 6) {
  //username has to less than 6 characters
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Username must be less than 6 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");

  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if (userEntered.indexOf(' ') > 0) {
  //username cannot contain whitespace
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Username can't contain whitespace.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");

  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  document.getElementById("usernameGroup").classList.remove("has-success");
  }

  else {
  //Turn the username items green
  document.getElementById("usernameError").innerHTML="";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameGroup").classList.add("has-success");
  document.getElementById("usernameGroup").classList.remove("has-error"); //replace the id and the class name
  }
}

function validatePassword(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if (passEntered.toUpperCase() == 'PASSWORD') {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Password can't be password...";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if (passEntered == userEntered) {
    //password cannot be the same as username
  document.getElementById("passwordError").innerHTML="Password can't be the same as username";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if (passEntered.length > 20 || passEntered.length < 6){
  //password must be between 6 and 20 characters
  document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else {
  //Turn the password items green
  document.getElementById("passwordError").innerHTML="";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
  }
}

function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  validateUsername();
  validatePassword();
  alert("Username: " + userEntered + "\n" +
  "Password: " + passEntered);
}
