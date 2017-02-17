(function(){
    "use strict";
    // TODO: Create person object
    // var person = todo;

    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();
    var person = new Object();
    person.firstName = "William";
    person.lastName = "Staud";

    person.sayHello = function () {
    	alert("Hello, " + this.firstName + " " + this.lastName);
    }

    person.sayHello();




})();
