(function() {
    var APPID = "0d6974b5095c50379dabf3351c79f6e1";
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily";
    var outputString ="";
    var output = $("#output");

    var getWeather = function() {
        $.get(url, {
            APPID: APPID,
            q: "San Antonio",
            //lat: 29.423017,
            //lon: -98.48527,
            cnt: 3,  //days outputed up to 16
            units: "imperial"

        }).fail(function(data, status) {
            alert("Failed to load:" + status);
        }).done(function(data) {

            data.list.forEach(function (data, index ,array) {
                 outputString = data;
            output.append(outputString);
            console.log(outputString);

                
            });

           

            

        });
    };
    getWeather();


})();
