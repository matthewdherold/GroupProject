
filterButton = $("#filterButton")
filterDrop = $("#filterDrop")

sortButton = $("#sortButton")
sortDrop = $("#sortDrop")
sortCriteria = $("#sortCriteria")
bestMatch = $("#bestMatch")
highestRated = $("#highestRated")
lowestPrice = $("#lowestPrice")

searchButton = $("#searchButton")

surpriseButton = $("#surpriseButton")

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
    // sortDrop = $("#sortDrop");
    // filterDrop = $("#filterDrop");
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

    sortCriteria.text("Best Match");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

highestRated.on( "click", function() {

    sortCriteria.text("Highest Rated");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

lowestPrice.on( "click", function() {

    sortCriteria.text("Lowest Price");
    sortDrop.removeClass("is-active");
    return (sortButton)
});

$("#searchButton").on( "click", function() {
    console.log("search");
  });

$("#surpriseButton").on( "click", function() {
    console.log("surprise");
  });

