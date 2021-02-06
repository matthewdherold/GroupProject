var searchButton = $("#searchButton");
var searchBar = $("#searchBar")

searchButton.click(function(){
    $("#hotelResults").empty()
    var userInput = $("#searchBar").val();

    
	if (userInput !== "") {
        console.log(userInput);
        
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://hotels4.p.rapidapi.com/locations/search?query=" + userInput + "&locale=en_US",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "24e0114115msha91991ed1a11cd9p1e13b9jsn62259ea0d893",
                "x-rapidapi-host": "hotels4.p.rapidapi.com"
            }
        };
        $.ajax(settings).done(function (data) {
                console.log(data);
                console.log(data.suggestions[0].entities[0].destinationId);
                var destinationId = data.suggestions[0].entities[0].destinationId;
                console.log(destinationId);
                const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://hotels4.p.rapidapi.com/properties/list?destinationId="+ destinationId + "&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE",
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "24e0114115msha91991ed1a11cd9p1e13b9jsn62259ea0d893",
                    "x-rapidapi-host": "hotels4.p.rapidapi.com"
                }
            };
            $.ajax(settings).done(function (data) {
                console.log(data);
                for (let i = 0; i < 5; i++) {
                    console.log(data.data.body.searchResults.results[i].name);
                    var hotelName = data.data.body.searchResults.results[i].name
                    var addRess = data.data.body.searchResults.results[i].address
                    var streetAdd = addRess.streetAddress;
                    var Local = addRess.locality;
                    var regn = addRess.region;
                    var ZipCode = addRess.postalCode;
                    console.log(streetAdd + " " + Local + " " + regn + ", " + ZipCode);

                    console.log(data.data.body.searchResults.results[i].ratePlan.price.current);
                    var price = data.data.body.searchResults.results[i].ratePlan.price.current;

                    console.log(data.data.body.searchResults.results[i].starRating);
                    var rating = data.data.body.searchResults.results[i].starRating;

                    console.log(data.data.body.searchResults.results[i].thumbnailUrl);
                    var photo = data.data.body.searchResults.results[i].thumbnailUrl;
                    $("#hotelResults").append( 
                                                        "<div class='results' style='background-color: rgb(195, 235, 241); padding: 3ch;'>" +
                                                        "<h2>" + hotelName + "</h2>" + 
                                                        "<img src =" + photo + ">" +
                                                        "<p>" + "Address: " + streetAdd + " " + Local + " " + regn + ", " + ZipCode + "</p>" + 
                                                        "<p>" + "Price: " + price + "</p>" + 
                                                        "<p>" + "Rating: " + rating + "/5" + "</p>" +
                                                        "</div>"
                                                    );
                    
                };
            });
        });
    };
});