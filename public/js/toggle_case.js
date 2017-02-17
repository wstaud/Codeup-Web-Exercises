var string = "abcBc12#";
var stringArray = string.split("");

var upperCase = string.toUpperCase();
var upperCaseArray = upperCase.split("");

var lowerCase = string.toLowerCase();
var lowerCaseArray = lowerCase.split("");
var finalArray = [];

console.log("This is the starting string: " + string);

for (var i = 0; i < stringArray.length; i++) {
	if (stringArray[i] == upperCaseArray[i]) {
		finalArray.push(lowerCaseArray[i]);
		
	}else if (stringArray[i] == lowerCaseArray[i]) {
		finalArray.push(upperCaseArray[i]);
		
	}
}

var final = finalArray.join("");
console.log("This is the uppercase string: " + final);




