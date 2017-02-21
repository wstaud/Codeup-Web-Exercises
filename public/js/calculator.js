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
		console.log(buttonCount);  //debug
	}
	//define additional buttons
	var buttonClear = document.getElementById("clear");
	var buttonNegative = document.getElementById("isNegative");
	var buttonPercentage = document.getElementById("percentage");
	var buttonDivide = document.getElementById("divide");
	var buttonMultiply = document.getElementById("multiply");
	var buttonSubtract = document.getElementById("subtract");
	var buttonAdd = document.getElementById("add");
	var buttonEquals = document.getElementById("equals");
	var buttonDecimal = document.getElementById("decimal");

	//define the screen
	var display = document.getElementById("display");
	var centerHand = document.getElementById("centerHand");
	var displayInput = document.getElementById("displayInput");


	//Other Variables
	displayInput.value = 0.0;   //Defualt Display Variable
	var num1;  					//First number to be calculated
	var num2;					//Second number to be calculated
	var opperator;				//User picked operator to be applied to num1 and num2
	var finished = false;		//Locks the equals button after equation is complete and displayed when true
	// var total;				//May be used later to revert to a total system vs display system


	//Function to display user inputed numbers on display
	var changeMain = function (event) {
		if (displayInput.value == 0.0) {
			displayInput.value = this.innerHTML;
		}else {
			displayInput.value = displayInput.value + this.innerHTML;
		}
		
	}
	//Changes positive number to negative and vise versa
	var toNegative = function (event) {
		if (displayInput.value > 0) {
			displayInput.value *= -1;
		}else if (displayInput.value < 0) {
			displayInput.value *= 1;
		}
	}

	//allows user to input a decimal
	var decimal = function (event) {
		var display = displayInput.value;
		if (display.indexOf(".") > -1) {
			display = display.split('.').join('');
			display = display += ".";
			displayInput.value = display;
		}else {
			displayInput.value += ".";
		}
	}
	//Turns number into percentage of 100% (ex 100 = 1, 10 = .1, 1 = .01)
	var percentage = function (event) {
		displayInput.value *= .01;
	}



	//Function to clear the calculator, sets it back to zero (may be reverted to total later) and sets finished to false to allow equals again
	var clear = function (event) {
		displayInput.value = 0.0;
		finished = false;
	}

	//Assigns num1 to what is on the display and assigns the opperator, sets up for num2 input.
	var assignOpperator = function (event) {
			if (this.innerHTML == "+") {
				opperator = "add";
				num1 = parseFloat(displayInput.value);
				displayInput.value = "";
			}else if (this.innerHTML == "-") {
				opperator = "subtract";
				num1 = parseFloat(displayInput.value);
				displayInput.value = "";
			}else if (this.innerHTML == "x") {
				opperator = "multiply";
				num1 = parseFloat(displayInput.value);
				displayInput.value = "";
			}else if (this.innerHTML == "/") {
				opperator = "divide";
				num1 = parseFloat(displayInput.value);
				displayInput.value = "";
			}
			console.log(num1);			//debug
			console.log(opperator);  	//debug
	}


	//Assigns num2 to display, equates the problem and sets finished to true to prevent additional equals 
	var complete = function (event) {
		if (finished == false) {
			if (opperator == "add") {
				num2 = parseFloat(displayInput.value);
				displayInput.value = (num1 + num2);
				finished = true;
			}else if (opperator == "subtract") {
				num2 = parseFloat(displayInput.value);
				displayInput.value = (num1 - num2);
				finished = true;
			}else if (opperator == "multiply") {
				num2 = parseFloat(displayInput.value);
				displayInput.value = (num1 * num2);
				finished = true;
			}else if (opperator == "divide") {
				num2 = parseFloat(displayInput.value);
				displayInput.value = (num1 / num2);
				finished = true;
			}
			
		}else if (finished == true) {
			displayInput.value = displayInput.value;
		}
		console.log(num2);  //debug
		console.log(finished); //debug

	}


	//Number Button Listeners
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
	//Additional Button listeners
	buttonClear.addEventListener("click", clear);
	buttonEquals.addEventListener("click", complete);
	buttonAdd.addEventListener("click", assignOpperator);
	buttonSubtract.addEventListener("click", assignOpperator);
	buttonMultiply.addEventListener("click", assignOpperator);
	buttonDivide.addEventListener("click", assignOpperator);
	buttonDecimal.addEventListener("click", decimal);
	buttonNegative.addEventListener("click", toNegative);
	buttonPercentage.addEventListener("click", percentage);


	







})();