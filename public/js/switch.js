var luckyNumber = Math.floor(Math.random()* 6);

var receipt = 60.00;

console.log("Your lucky number is: " + luckyNumber);
switch (luckyNumber) {
	case 1:
		receipt = (receipt - (receipt * .10));
		console.log("Total: $" + receipt);
		break;
	case 2:
		receipt = (receipt - (receipt * .25));
		console.log("Total: $" + receipt);
		break;
	case 3:
		receipt = (receipt - (receipt * .35));
		console.log("Total: $" + receipt);
		break;
	case 4:
		receipt = (receipt - (receipt * .50));
		console.log("Total: $" + receipt);
		break;
	case 5:
		console.log("Total: $0");
		break;
	case 0:
		console.log("YOU LOSE");
}	

var month = Math.floor(Math.random()* 13);


if (month == 0){
	month += 1;
}
console.log("Number is: " + month);
	switch (month) {
		case 1:
			console.log("January");
			break;
		case 2:
			console.log("February");
			break;
		case 3:
			console.log("March");
			break;
		case 4:
			console.log("April");
			break;
		case 5:
			console.log("May");
			break;
		case 6:
			console.log("June");
			break;
		case 7:
			console.log("July");
			break;
		case 8:
			console.log("August");
			break;
		case 9:
			console.log("September");
			break;
		case 10:
			console.log("October");
			break;
		case 11:
			console.log("November");
			break;
		case 12:
			console.log("December");

	}

