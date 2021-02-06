
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

searchBar.keypress(function(event) { 
    if (event.keyCode === 13) { 
        searchButton.click(); 
    } 
});

$(".body").on("click", function() {
    sortDrop.removeClass("is-active");
    filterDrop.removeClass("is-active");
});

filterButton.on( "click", function() {

    if (sortDrop.hasClass("dropdown is-active") === true) {
        sortDrop.removeClass("is-active");
    };
    if (filterDrop.hasClass("dropdown is-active") === true) {
        filterDrop.removeClass("is-active");
    } else {
        filterDrop.addClass("is-active");
    };
});

sortButton.on( "click", function() {

    if (filterDrop.hasClass("dropdown is-active") === true) {
        filterDrop.removeClass("is-active");
    };
    if (sortDrop.hasClass("dropdown is-active") === true) {
        sortDrop.removeClass("is-active");
    } else {
        sortDrop.addClass("is-active");
    }
});

bestMatch.on( "click", function() {

    sortCriteria.text("Sort By: Best Match");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

highestRated.on( "click", function() {

    sortCriteria.text("Sort By: Highest Rated");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

lowestPrice.on( "click", function() {

    sortCriteria.text("Sort By: Lowest Price");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

$("#searchButton").on( "click", function() {
    console.log("search");
  });

$("#surpriseButton").on( "click", function() {
    console.log("surprise");
  });
