(function() {
    "use strict";

    var circle = {
        //Set this raidus for the first output
        radius: 3,

        getArea: function () {
            var area = (Math.PI * (this.radius * this.radius));

            return area; 
        },
        // redeclares radius locally and checks if it needs rounded or not
        logInfo: function (doRounding) {
            var area = circle.getArea();

            if (doRounding == true) {
                area = Math.round(area);
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };
    //Outputs above set radius
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    //Outputs below set radius
    circle.radius = 5;
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
