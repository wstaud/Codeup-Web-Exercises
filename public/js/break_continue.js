var randomNum = Math.floor((Math.random()*50)+1);
var i = 0;
var isEven;

console.log("Random number to skip is: " + randomNum);

while (i < 50) {
	isEven = i%2;
	if ((isEven == 1) && (i !== randomNum)) {
		console.log("Here is an odd number: " + i);
		
	}else if (i == randomNum) {
		console.log("Yikes! Skipping number: " + i);
	}
	i++;

}