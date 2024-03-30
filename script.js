function validEmail(str) {
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (str.value.match(validRegex)) {

    alert("Valid email address!");

    document.form1.text1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;

  }
}
// Do not change the code below.
/* const str = prompt("Enter an email address.");
alert(validEmail(str)); */
