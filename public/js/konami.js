$(document).ready (function() {
	"use strict";
	//HTML Variables
    var display = $("#display");
    var error = $("#error");
    var reset = $("#reset");
    var submit = $("#submit");
    var secret = $("#secret");
    var wallpaper = $("html");
    var landing = $("#landing");
    var landing2 = $("#unlocked");
    var title = $("#titleUnlocked");
    var consoleOutput = $("#console");
    var lock = $("#lockButton");
    var buttons = $("button");
    //Numeric variables
    var output = "";
    var virtualConsole = "";
    var outputArray = [];

    //Keylogger, outputting certain keys, adding to check string and virtual console
    $(document).keyup(function(event){
        var keycode = event.keyCode;
        virtualConsole += "  --keycode: " + keycode;
        consoleOutput.html(virtualConsole);

        if (keycode == 38) {
        	output += "Up, ";
        	error.html("CLEAN");
        }else if (keycode == 40) {
        	output += "Down, ";
        	error.html("CLEAN");
        }else if (keycode == 37) {
        	output += "Left, ";
        	error.html("CLEAN");
        }else if (keycode == 39) {
        	output += "Right, ";
        	error.html("CLEAN");
        }else if (keycode == 66) {
        	output += "B, ";
        	error.html("CLEAN");
        }else if (keycode == 65) {
        	output += "A, ";
        	error.html("CLEAN");
        }else if (keycode == 13) {
        	console.log(output);
        	check();
        }else {
        	error.html("ERROR: Invalid Key!");
        	virtualConsole += "  --You apparently have no idea what you are doing. Stop.--  ";
	        consoleOutput.html(virtualConsole);

        }
        display.html(output);
    });
    //Resets everything to original state: displays, style, etc
    reset.click(function() {
    	output = "";
    	display.html(output);
    	secret.html('');
    	error.html("CLEAN");
    	virtualConsole = "  --CLEARED--  ";
        consoleOutput.html(virtualConsole);
        landing.css("display", "block");
    	landing2.css("display", "none");
    });
    ////Resets everything to original state, just like reset. Plan to merge with class button
    lock.click(function() {
    	output = "";
    	display.html(output);
    	secret.html('');
    	error.html("CLEAN");
    	virtualConsole = "  --CLEARED--  ";
        consoleOutput.html(virtualConsole);
        landing.css("display", "block");
    	landing2.css("display", "none");
    });
    //Gives button slight hover styling
    buttons.hover(function() {
		$(this).css("border", "3px solid black");
	}, 
	function() {
		$(this).css("border", "2px solid blue");
	});
    //checks string for correct konami code
    var check = function() {
    	console.log(outputArray);
    	console.log(output);
    	if (output == "Up, Up, Down, Down, Left, Right, Left, Right, B, A, ") {
    		secret.html('<img src="/img/dogeSpace.gif"> <img src="/img/fingers.gif"> <img src="/img/doge.png"> <img src="/img/russianDoge.png"> <img src="/img/cat.gif"> <img src="/img/salt.gif"> <img src="/img/vapeNation.jpg">  <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/226869951&amp;color=00cc11&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    		title.html("MEME STASH")
    		landing.css("height", "");
    		landing.css("display", "none");
    		landing2.css("display", "block");
    	}else {
    		error.html("ERROR: Incorect Input!");
    	}
    }
    //Runs check on submit button click
    submit.click(check);

});