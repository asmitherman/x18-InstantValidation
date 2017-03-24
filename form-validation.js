function validate(){
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
  }

  else if (userEntered.indexOf(' ') > 0) {
  //username cannot contain whitespace
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Username can't contain whitespace.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");

  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  }

  else {
  //Turn the username items green
  document.getElementById("usernameGroup").classList.add("has-success");
  }

  if (passEntered.toUpperCase() == 'PASSWORD') {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Password can't be password...";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if (passEntered == userEntered) {
    //password cannot be the same as username
  document.getElementById("passwordError").innerHTML="Password can't be the same as username";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if (passEntered.length > 20 || passEntered.length < 6){
  //password must be between 6 and 20 characters
  document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else {
  //Turn the password items green
  document.getElementById("passwordGroup").classList.add("has-success");

  }
}
