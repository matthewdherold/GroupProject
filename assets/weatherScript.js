const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c50f8e3cedmshc2750e74357945fp1b0b2ajsn6ffdaf598689",
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});