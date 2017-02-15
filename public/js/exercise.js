// Your friend needs help finishing a count-the-lucky-number program. Finish it!


'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
//changed i to 0
var i = 0;
var num0 = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;

while (i < 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    //Used switch to log total times a lucky number appears
    switch (luckyNumber) {
    	case 0:
    		num0 += 1;
    		break
    	case 1:
    		num1 += 1;
    		break
    	case 2:
    		num2 += 1;
    		break
    	case 3:
    		num3 += 1;
    		break
    	case 4:
    		num4 += 1;
    		break
    	case 5:
    		num5 += 1;
    		break
    }
    i += 1; 
    //added +1 to i and logged total numbers and lucky number for debugging and proof of concept
    console.log("Lucky Number: " + luckyNumber);
    console.log("Total Numbers " + i);
}
//desired output
console.log("0 appeared " + num0 + " times");
console.log("1 appeared " + num1 + " times");
console.log("2 appeared " + num2 + " times");
console.log("3 appeared " + num3 + " times");
console.log("4 appeared " + num4 + " times");
console.log("5 appeared " + num5 + " times");

// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100