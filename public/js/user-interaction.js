//Declared Global Variables
var userName = prompt("What is your name?");

//Checking for null (cancels if so), if not trims blanks and checks for no input. Then continues.
if (userName !== null) {
	while (userName.trim() == "") {
		userName = prompt("What is your name?");
	}
	alert("Welcome, " + userName);
}else {
	alert("That's okay, we don't need a name.");
}
//Declared Global Variables
var pizzaAnswer = confirm("Do you like pizza?");

//Checks true/false for Pizza input 
if (pizzaAnswer == true) {
	alert("Congrats, you are human.");
}else {
	alert("Yep, you are not human.");
}


