//Grades Problem
var grades = [70, 80, 95];
var x = 0;


while (x < grades.length) {
	if (grades[x] > 80) {
		console.log(grades[x] + ": You're awesome!");
		x = x + 1;
	}else {
		console.log(grades[x] + ": You need to practice more.");
		x = x + 1;
	}

} 


// HEB Problem
var names = ["Cameron", "Ryan", "George"];
var amounts = [180.00, 250.00, 320.00];
var newDiscount = 0.35;
var newDiscountTotal = 0.00;
var newFinal = 0.00;
var y = 0;

while (y < amounts.length) {
	if (amounts[y] > 200) {
		newDiscountTotal = amounts[y] * newDiscount;
		newFinal = amounts[y] - newDiscountTotal;

		console.log(names[y] + " bought $" + amounts[y] + " of groceries. Discount was applied. Final payment: $" + newFinal);
		y += 1;
	}else {
		console.log(names[y] + " bought $" + amounts[y] + " of groceries. Discount was not applied. Final payment: $" + amounts[y]);
		y += 1;
	}
}


//Home Problem
var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin == 0) {
	console.log("Buy a car.");
}else if (flipACoin == 1) {
	console.log("Buy a house.");
}

