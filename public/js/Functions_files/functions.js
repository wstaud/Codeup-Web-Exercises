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


//----------------   NEW EXERCISE   ----------------------

//exercise 1 function
function log(logVar) {
	console.log(logVar);
}


//exercise 2 function
function identity(idVar) {
	return idVar;
}
//exercise 3 function
function getRandomIntBetween(min, max) {
	return Math.floor((Math.random()*max)+min);
}

function isNumeric(input) {
	var isIt;
	isIt = !isNaN(input);
	return isIt;
}

function add(a, b) {
	var sum = a + b;
	return sum;
}

function subtract(a, b) {
	var sum = a - b;
	return sum;
}


function multiply(a, b) {
	var sum = a * b;
	return sum;
}


function divide(a, b) {
	var sum = a / b;
	return sum;
}

function square(a) {
	var sum = multiply(a, a);
	return sum;
}

function sumOfSquares(a,b) {
	var sum = square(a) + square(b);
}




//exercise 1 call
var result = log();
//exercise 2 call
var result2 = identity();

















