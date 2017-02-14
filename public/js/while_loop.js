var lastNumber = 65536;
var firstNumber = 2;

while (firstNumber <= lastNumber) {
	console.log(firstNumber);
	firstNumber *= 2;
}




var allCones = Math.floor(Math.random() * 50) + 50;



do {
	var cones = Math.floor(Math.random() * 5) + 1;
	if (allCones >= cones) {
		allCones = allCones - cones;
		console.log(cones + " cones sold...");
	}else if (allCones < cones) {
		console.log("Cannot sell you " + cones + " I only have " + allCones + " left.");
	}
	console.log(allCones);

} while (allCones > 0);
console.log("Yay! I sold them all.");
console.log("");




// var allCones = Math.floor(Math.random() * 50) + 50;
// var cones;


// do {
// 	cones = Math.floor(Math.random() * 5) + 1;
// 	if (allCones >= cones) {
// 		allCones = allCones - cones;
// 		console.log(cones + " cones sold...");
// 	} else {
// 		console.log("Cannot sell you " + cones + " I only have " + allCones + " left.");
// 	} 
// 	if (allCones == 0) {
// 		console.log("Yay! I sold them all.");
// 		allCones = -1;
// 	}
// 	console.log(allCones);
// } while (allCones > 0);

var n = Math.floor(Math.random() * 100);
var isEven = n%2;
if (isEven == 0){
	console.log(n + " is a even number.");
}else {
	console.log(n + " is a odd number.");
}






