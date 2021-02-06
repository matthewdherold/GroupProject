var searchButton = $("#searchButton");
var apiKey = "2ab902a0fe313d71d91734e79f858556";
var keyCount = 0;

searchButton.click(function () { 
    var forecastList = $("#forecastList")
	var userInput = $("#searchBar").val();
	var urlfiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&Appid=" + apiKey + "&units=imperial";


	if (userInput !== "") {
		console.log(userInput);
	}else {
        console.log(userInput);
		$.ajax({
            url: urlfiveDay,
            method: "GET"
        }).then(function (response) {
            // Array for 5day  
            var day = [0, 8, 16, 24, 32];
            var fiveDayCard = $(".fiveDayCard").addClass("card-body");
            var fiveDayDiv = $(".fiveDayOne").addClass("card-text");
            fiveDayDiv.empty();
            // For each for 5 days
            forecastList.empty();
            day.forEach(function (i) {
                var fiveDayForecast = new Date(response.list[i].dt * 1000);
                fiveDayForecast = fiveDayForecast.toLocaleDateString("en-US");

                
    
                forecastList.append(
                    "<div class='fiveDayColor' style='background-color: rgb(195, 235, 241); padding: 2ch;'>" + 
                    "<h2>" + fiveDayForecast + "</h2>" + 
                    "<p>" + "Forecast: " + response.list[i].weather[0].description + "</p>" + 
                    "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + 
                    "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + 
                    "</div>");

                console.log(response.list);
            })

        });
	}

});
