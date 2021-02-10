filterButton = $("#filterButton")
filterDrop = $("#filterDrop")
sortButton = $("#sortButton")
sortDrop = $("#sortDrop")
sortCriteria = $("#sortCriteria")
bestMatch = $("#bestMatch")
highestRated = $("#highestRated")
lowestPrice = $("#lowestPrice")
searchButton = $("#searchButton")
searchBar = $("#searchBar")
surpriseButton = $("#surpriseButton")

searchBar.keypress(function (event) {
    if (event.keyCode === 13) {
        searchButton.click();
    }
});

$(document).click(function (event) {
    var target = $(event.target);
    if (!target.closest(filterDrop).length) {
        filterDrop.removeClass("is-active");
    }
    if (!target.closest(sortDrop).length) {
        sortDrop.removeClass("is-active");
    }
});

filterButton.click(function () {

    if (filterDrop.hasClass("dropdown is-active") === true) {
        filterDrop.removeClass("is-active");
    } else {
        filterDrop.addClass("is-active");
    }
});

sortButton.click(function () {

    if (sortDrop.hasClass("dropdown is-active") === true) {
        sortDrop.removeClass("is-active");
    } else {
        sortDrop.addClass("is-active");
    }
});

bestMatch.click(function () {

    sortCriteria.text("Sort By: Best Match");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

highestRated.click(function () {

    sortCriteria.text("Sort By: Highest Rated");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

lowestPrice.click(function () {

    sortCriteria.text("Sort By: Lowest Price");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

searchButton.click(function () {
    console.log("search");
});

surpriseButton.click(function () {
    console.log("surprise");
    var locations = ["Houston", "Atlanta", "Honolulu", "Paris", "Athens", "Beijing", "Jaipur", "Bergen", "San Fransisco", "Marrakesh", "Dublin", "Bangkok", "Dubrovnik", "Seoul", "Queenstown"];
    var rand = locations[Math.round(Math.random() * (locations.length - 1))];
    console.log(rand)
    searchBar.val(rand);
    searchButton.click();
}
);
