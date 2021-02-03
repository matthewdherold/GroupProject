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

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "78094caf75msh9b17bb9200541e9p14a947jsn016bc2046184",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/properties/get-details?id=424023&locale=en_US&currency=USD&checkOut=2020-01-15&adults1=1&checkIn=2020-01-08",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "78094caf75msh9b17bb9200541e9p14a947jsn016bc2046184",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/get-meta-data",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "78094caf75msh9b17bb9200541e9p14a947jsn016bc2046184",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

var unirest = require("unirest");

var req = unirest("GET", "https://hotels4.p.rapidapi.com/properties/list");

req.query({
	"destinationId": "1506246",
	"pageNumber": "1",
	"checkIn": "2020-01-08",
	"checkOut": "2020-01-15",
	"pageSize": "25",
	"adults1": "1",
	"currency": "USD",
	"locale": "en_US",
	"sortOrder": "PRICE"
});

req.headers({
	"x-rapidapi-key": "78094caf75msh9b17bb9200541e9p14a947jsn016bc2046184",
	"x-rapidapi-host": "hotels4.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

$.ajax(settings).done(function (response) {
	console.log(response);
});