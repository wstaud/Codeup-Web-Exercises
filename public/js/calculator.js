(function () {

	console.log("this is a test:");

	var button1 = document.getElementById("one");
	var button2 = document.getElementById("two");
	var button3 = document.getElementById("three");
	var button4 = document.getElementById("four");
	var button5 = document.getElementById("five");
	var button6 = document.getElementById("six");
	var button7 = document.getElementById("seven");
	var button8 = document.getElementById("eight");
	var button9 = document.getElementById("nine");
	var button0 = document.getElementById("zero");

	var buttonClear = document.getElementById("clear");
	var buttonNegative = document.getElementById("isNegative");
	var buttonPercentage = document.getElementById("percentage");
	var buttonDivide = document.getElementById("divide");
	var buttonMultiply = document.getElementById("multiply");
	var buttonSubtract = document.getElementById("subtract");
	var buttonAdd = document.getElementById("add");
	var buttonEquals = document.getElementById("equals");

	var leftHand = document.getElementById("leftHand");
	var rightHand = document.getElementById("rightHand");
	var centerHand = document.getElementById("centerHand");

	var display = document.getElementById("leftHandNumber");


	var add = function() {

	}

	var changeMain = function (event) {
		if (display.value == 0) {
			display.value = this.innerHTML;
		}else {
			display.value = display.value + this.innerHTML;
		}
		
	}

	var clear = function (event) {
		display.value = 0;
	}

	button1.addEventListener("click", changeMain);
	button2.addEventListener("click", changeMain);
	button3.addEventListener("click", changeMain);
	button4.addEventListener("click", changeMain);
	button5.addEventListener("click", changeMain);
	button6.addEventListener("click", changeMain);
	button7.addEventListener("click", changeMain);
	button8.addEventListener("click", changeMain);
	button9.addEventListener("click", changeMain);
	button0.addEventListener("click", changeMain);

	buttonClear.addEventListener("click", clear);





})();