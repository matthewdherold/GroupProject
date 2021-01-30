const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query=new%20york&locale=en_US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c50f8e3cedmshc2750e74357945fp1b0b2ajsn6ffdaf598689",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});