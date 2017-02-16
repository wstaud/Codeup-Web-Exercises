var userName = prompt("What is your name?");

if (userName !== null) {
	while (userName.trim() == "") {
		userName = prompt("What is your name?");
	}
	alert("Welcome, " + userName);
}else {
	alert("That's okay, we don't need a name.");
}
var pizzaAnswer = confirm("Do you like pizza?");
if (pizzaAnswer == true) {
	alert("Congrats, you are human.");
}else {
	alert("Yep, you are not human.");
}


