(function () {

	console.log("this is a test:");
	var buttonArrayLength = document.getElementsByClassName("buttonNumber").length;
	
	for (var i = 0; i < buttonArrayLength; i++) {
		var buttonArray = document.getElementsByClassName("buttonNumber")[i];
		var buttonCount = document.getElementsByClassName("buttonNumber")[i].innerHTML;
		if (buttonCount == 0) {
			var button0 = buttonArray;
		}else if (buttonCount == 1) {
			var button1 = buttonArray;
		}else if (buttonCount == 2) {
			var button2 = buttonArray;
		}else if (buttonCount == 3) {
			var button3 = buttonArray;
		}else if (buttonCount == 4) {
			var button4 = buttonArray;
		}else if (buttonCount == 5) {
			var button5 = buttonArray;
		}else if (buttonCount == 6) {
			var button6 = buttonArray;
		}else if (buttonCount == 7) {
			var button7 = buttonArray;
		}else if (buttonCount == 8) {
			var button8 = buttonArray;
		}else if (buttonCount == 9) {
			var button9 = buttonArray;
		}
		console.log(buttonCount);
	}
	
	//define special buttons
	var buttonClear = document.getElementById("clear");
	var buttonNegative = document.getElementById("isNegative");
	var buttonPercentage = document.getElementById("percentage");
	var buttonDivide = document.getElementById("divide");
	var buttonMultiply = document.getElementById("multiply");
	var buttonSubtract = document.getElementById("subtract");
	var buttonAdd = document.getElementById("add");
	var buttonEquals = document.getElementById("equals");

	//define the screen
	var display = document.getElementById("display");
	var centerHand = document.getElementById("centerHand");

	var displayInput = document.getElementById("displayInput");



	var changeMain = function (event) {
		if (displayInput.value == 0) {
			displayInput.value = this.innerHTML;
		}else {
			displayInput.value = displayInput.value + this.innerHTML;
		}
		
	}
	//clears the calculator
	var clear = function (event) {
		displayInput.value = 0;
	}

	var num1;
	var num2;
	var opperator;
	var assignOpperator = function (event) {
			if (this.innerHTML == "+") {
				opperator = "add";
				num1 = parseInt(displayInput.value);
				displayInput.value = 0;
			}else if (this.innerHTML == "-") {
				opperator = "subtract";
				num1 = parseInt(displayInput.value);
				displayInput.value = 0;
			}else if (this.innerHTML == "x") {
				opperator = "multiply";
				num1 = parseInt(displayInput.value);
				displayInput.value = 0;
			}else if (this.innerHTML == "/") {
				opperator = "divide";
				num1 = parseInt(displayInput.value);
				displayInput.value = 0;
			}
			console.log(num1);
			console.log(opperator);  //debug
	}

	var complete = function (event) {
		if (opperator == "add") {
			num2 = parseInt(displayInput.value);
			displayInput.value = (num1 + num2);
		}else if (opperator == "subtract") {
			num2 = parseInt(displayInput.value);
			displayInput.value = (num1 - num2);
		}else if (opperator == "multiply") {
			num2 = parseInt(displayInput.value);
			displayInput.value = (num1 * num2);
		}else if (opperator == "divide") {
			num2 = parseInt(displayInput.value);
			displayInput.value = (num1 / num2);
		}
		console.log(num2);  //debug

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
	buttonEquals.addEventListener("click", complete);
	buttonAdd.addEventListener("click", assignOpperator);
	buttonSubtract.addEventListener("click", assignOpperator);
	buttonMultiply.addEventListener("click", assignOpperator);
	buttonDivide.addEventListener("click", assignOpperator);







})();