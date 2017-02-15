"use strict";

var myNameIs = 'William'; // TODO: Fill in your name here.
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);


//Hello Name function
function sayHello(name) {
	console.log("Hello " + name);
}



//Odd or Even function
function isOddConsole(a) {
	var checkNum = a%2;
	if (checkNum == 0) {
		console.log("The number is even: " + a);
	}else {
		console.log("The number is odd: " + a);
	}
}
//Call in console version
function isOdd(a) {
	var checkNum = a%2;
	if (checkNum == 0) {
		return false;
	}else {
		return true;
	}
}

//Calling Functions
sayHello(myNameIs);
isOddConsole(random);