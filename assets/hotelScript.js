var searchButton = $("#searchButton");
var searchBar = $("#searchBar");
var adults = 1

searchButton.click(function () {
    $("#hotelResults").empty()
    var userInput = $("#searchBar").val();

    if ($("#checkInDate").val() != undefined) {
        checkIn = $("#checkInDate").val();
    }
    if ($("#checkOutDate").val() != undefined) {
        checkOut = $("#checkOutDate").val();
    }
    if ($("#numberGuests").val() != undefined && $("#numberGuests").val() > 0 && $("#numberGuests").val() < 10) {
        adults = $("#numberGuests").val()
    }
    var criteria = ""
    criteria = $("#sortCriteria")[0].childNodes[0].textContent
    var sort = ""

    if (criteria = "Sort By: Best Match") {
        sort = "BEST_SELLER"
    } else if (criteria = "Sort By: Highest Rated") {
        sort = "STAR_RATING_HIGHEST_FIRST"
    } else {
        sort = "PRICE"
    };

    console.log(sort)
    console.log(criteria)
    console.log(checkIn)
    console.log(checkOut)
    console.log(adults)

    if (userInput !== "") {
        console.log(userInput);

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://hotels4.p.rapidapi.com/locations/search?query=" + userInput + "&locale=en_US",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "c50f8e3cedmshc2750e74357945fp1b0b2ajsn6ffdaf598689",
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
                "url": "https://hotels4.p.rapidapi.com/properties/list?destinationId=" + destinationId + "&pageNumber=1&checkIn=" + checkIn + "&checkOut=" + checkOut + "&pageSize=25&adults1=" + adults + "&currency=USD&locale=en_US&sortOrder=" + sort,
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "c50f8e3cedmshc2750e74357945fp1b0b2ajsn6ffdaf598689",
                    "x-rapidapi-host": "hotels4.p.rapidapi.com"
                }
            };

            $.ajax(settings).done(function (data) {
                console.log(data);
                for (let i = 0; i < 10; i++) {
                    console.log(data.data.body.searchResults.results[i].name);
                    var hotelName = data.data.body.searchResults.results[i].name;
                    var addRess = data.data.body.searchResults.results[i].address;
                    var streetAdd = addRess.streetAddress;
                    var Local = addRess.locality;
                    var regn = addRess.region;
                    var ZipCode = addRess.postalCode;
                    console.log(streetAdd + " " + Local + " " + regn + ", " + ZipCode);
                    var price = ""
                    if (data.data.body.searchResults.results[i].ratePlan) {
                    console.log(data.data.body.searchResults.results[i].ratePlan.price.current);
                    price = data.data.body.searchResults.results[i].ratePlan.price.current;
                    };
                    console.log(data.data.body.searchResults.results[i].starRating);
                    var rating = data.data.body.searchResults.results[i].starRating;

                    console.log(data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop);
                    var photo = data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop;

                    var hotelID = data.data.body.searchResults.results[i].id

                    $("#hotelResults").append(
                        "<div class='results' style='padding: 3ch;'>" +
                        "<h2><a href='https://www.hotels.com/ho" + hotelID + "/'>" + hotelName + "</a>" + "</h2>" +
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