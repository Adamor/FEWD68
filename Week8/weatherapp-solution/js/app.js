$(function () {





	$("#weather-form").submit(function (e) {
		e.preventDefault();

		var city = $("#city-field").val();

		console.log("The city is " + city);

		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + encodeURIComponent(city) + "&cnt=4&mode=json";

		console.log("The url is " + url);
/*

"list":[  
      {  
         "dt":1417719600,
         "temp":{  
            "day":291.76,
            "min":285.51,
            "max":291.76,
            "night":285.51,
            "eve":290.55,
            "morn":291.76
         },
*/
		$.ajax({
			url: url,
			dataType: "jsonp",
			success: function (data) {
				console.log(data);

				var list = data.list;

				processList(list);
			}
		});



		function processList(list) {
			console.log(list);

			var weatherData = [];

			for (var i = 0; i < list.length; i++) {

				var weatherDataObject = {
					minTemp: kelvinToFahrenheit(list[i].temp.min).toFixed(0),
					maxTemp: kelvinToFahrenheit(list[i].temp.max).toFixed(0),
					dayOut: i,
					dayName: getDayName(i)
				};

				weatherData.push(weatherDataObject);
			}

			console.log("The new weather data array ", weatherData);

			createForecastElements(weatherData);
		}


		function getDayName(dayOut) {
			var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var currentDate = new Date();

			var date = new Date(currentDate);
			date.setDate(currentDate.getDate() + dayOut);

			return dayNames[date.getDay()];
		}


		function kelvinToFahrenheit(kelvin) {
			var celsius = kelvinToCelsius(kelvin);
			var fahrenheit = celsiusToFahrenheit(celsius);

			return fahrenheit;
		}

		function kelvinToCelsius(kelvin) {
			return kelvin - 273;
		}

		function celsiusToFahrenheit(celsius) {
			return 9/5*celsius + 32;
		}

		function createForecastElements(weatherData) {
			console.log("Weather data", weatherData);

			$("#forecast").html("");

			for (var i = 0; i < weatherData.length; i++) {
				$("#forecast").append("" + 
					"<div class='day-weather'>" +
						"<div class='day'>" + weatherData[i].dayName + "</div>" +
						"<div class='min-temp'>" + weatherData[i].minTemp + "</div>" +
						"<div class='max-temp'>" + weatherData[i].maxTemp + "</div>" +
					"</div>");	
			}
			// $("#forecast")

		}

	});  















	// var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk';

	// $.ajax({
	//    type: 'GET',
	//     url: url,
	//     async: false,
	//     contentType: "application/json",
	//     dataType: 'jsonp',
	//     success: function(json) {
	//        console.log(json);
	//     },
	//     error: function(e) {
	//        console.log(e.message);
	//     }
	// });


});