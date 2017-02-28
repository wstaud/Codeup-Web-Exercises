(function() {
    "use strict";
    
    var output = $("#output");
    var refreshBtn = $("#refreshBtn");
    var titleString = "";
    var quantityString = "";
    var categoriesString = "";
    var priceString = "";
    var invetory = $.ajax("/data/inventory.json");
   

    

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
    var invetoryRefresh = function() {
    	
	    invetory.done(function(data) {

	    	data.forEach(function (data, index ,array) {
			
				var total = "<tr>";
				total += ("<td>" + data.title + "</td>");
				total += ("<td>" + data.quantity + "</td>");
				total += ("<td>" + data.price + "</td>");
				total += ("<td>" + data.categories + "</td>");
				total += "</tr>";

				output.append(total);

				
			});

	    });
	};
    var refresh = refreshBtn.click(function () {
    	output.html("");
    	invetoryRefresh();	
    });

})();