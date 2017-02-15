var startingNum = 1;
var final = ""; //To turn num into string
var i = 0; //how many loops
var x = 1; //number of total characters increased
//While runs 10 times to account from 1 to 0
while (i < 10) {
	//For loop adds starting number, converts to string  then repeats... ex: 1111 222222 33333333
	for (var numChar = 0; numChar < x; numChar++) {
		final = final + startingNum;	
	}
	console.log(final);
	final = "";
	i++;
	x++;
	startingNum = startingNum + 1;

	//subs 10 for 0
	if (startingNum == 10) {
		startingNum = 0;
	}
}



console.log("");


// Exercise 2
var randomNum = Math.floor(Math.random()* 11);
for (var y = 1; y <= 10; y++) {
	console.log(randomNum + "x" + y + "=" + (randomNum * y));
}
console.log("");


// Exercise 3
for (var z = 1; z <= 10; z++) {
	var randomNum3 = Math.floor(Math.random() * 200) + 20;
	var isEven = randomNum3%2;
	if (isEven == 0) {
		console.log(randomNum3 + " is even");
	}else {
		console.log(randomNum3 + " is odd");
	}
}
console.log("");


// Exercise 4

for (var countDown = 100; countDown > 0; countDown -= 5) {
	console.log(countDown);
}
