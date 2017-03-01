(function() {
    //Weather API and general variables
    var APPID = "7f8e3aa0aad113510e0c1eaafd1c17b8"; //Open Weather APPID
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily"; //Open Weather URL
    var output = $("#output"); //Main DIV to spit out html
    var latLong = $("#cords");
    var submitButton = $("#addressSubmit");
    var map = document.getElementById("maps");
    var clouds = $("#clouds");
    var deg = $("#deg");
    var dt = $("#dt");
    var humidity = $("#humidity");
    var pressure = $("#preassure");
    var speed = $("#speed");
    var latLongString = "";
    var outputString = "";

    
    


    //Setup weather API
    var getWeather = function() {
        $.get(url, {
            APPID: APPID,
            lat: lat,
            lon: long,
            cnt: 3,  //days outputed up to 16
            units: "imperial"
        //If API fails, alert.
        }).fail(function(data, status) {
            alert("Failed to load:" + status);
            //Spits out the API data and organizes it in an HTML structure
        }).done(function(data) {

            data.list.forEach(function (data, index ,array) {
                outputString += ("<div class='weatherBlock'>");
                outputString += ("<div class='boxBanner'></div>");
                outputString += ("<div class='temps space'>" + parseInt(data.temp.min) + "°/" + parseInt(data.temp.max) + "°</div>");
                outputString += ("<div class='space'><img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'></div>");
                outputString += ("<div class='space'>" + "<span class='bold'>" + data.weather[0].main + "</span> " + ": " + data.weather[0].description + "</div>");
                outputString += ("<div class='space'>" + "<span class='bold'>Humidity: </span>" + data.humidity + "</div>");
                outputString += ("<div class='space'>" + "<span class='bold'>Wind: </span>" + data.speed + "mph </div>");
                outputString += ("<div class='space'>" + "<span class='bold'>Pressure: </span>" + data.pressure + "</div>");
                outputString += ("</div>");


               
                output.html(outputString);
                console.log(data);

                 
            });

        });
    };
    //setup google map API options
    var mapOptions = {
            // Set the zoom level
            zoom: 4,

            // This sets the center of the map at our location
            center: {
                lat:  40.15555,
                lng: -98.489602
            }
        };
    //MAP vars
    var googleMap = new google.maps.Map(map, mapOptions);
    var address = "170 Buffalo Pl, Cibolo, TX 78108";
    var geocoder = new google.maps.Geocoder();
    var myLatlng = new google.maps.LatLng(40.15555,-98.489602);
    var lat = myLatlng.lat();
    var long = myLatlng.lng();
    var newLatLong = "";
    //first lat/long run:
    latLong.html("Lat: " + parseFloat(lat).toFixed(2) + "," + " Long: " + parseFloat(long).toFixed(2));
    //Enables marker drag
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: googleMap,
        draggable:true,
        title:"Drag me!"
       
    });
    //Updates lot/long based on dragged marker location
    marker.addListener('mouseup', function() {
        myLatlng = marker.getPosition();
        lat = myLatlng.lat();
        long = myLatlng.lng();
        latLongString = "";
        latLongString += "Lat: "+ parseFloat(lat).toFixed(2) + ", Long: " + parseFloat(long).toFixed(2);
        latLong.html(latLongString);
        latLongString = "";
        outputString = "";
        //Reloads new weather data
        getWeather();   
        });

    function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        googleMap.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        lat = results[0].geometry.location.lat();
        long = results[0].geometry.location.lng();
        latLongString = "";
        latLongString += "Lat: "+ parseFloat(lat).toFixed(2) + ", Long: " + parseFloat(long).toFixed(2);
        latLong.html(latLongString);
        latLongString = "";
        outputString = "";
        //Reloads new weather data
        getWeather();  


      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
    }


    submitButton.click(function() {
        codeAddress();
    });

    //First instance of weather load
    getWeather();

    



})();
