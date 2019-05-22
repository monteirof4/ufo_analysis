// Import UFO data from data.js
var ufoData = data;

// Select the submit button
var filter_data = d3.select("#filter-btn");

// Select the results table body
var ufo_table = d3.select("tbody");

// Select the input elements and get the raw HTML node
var inputDateEl = d3.select("#datetime");
var inputCountryEl = d3.select("#country");
var inputStateEl = d3.select("#state");
var inputCityEl = d3.select("#city");
var inputShapeEl = d3.select("#shape");
 
// Create a listener on the button
filter_data.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Use `.html("") to clear any existing metadata
    ufo_table.html("");
  
    // Get the value property of the input elements
    var inputDateVl = inputDateEl.property("value");
    var inputCountryVl = inputCountryEl.property("value").toLowerCase();
    var inputStateVl = inputStateEl.property("value").toLowerCase();
    var inputCityVl = inputCityEl.property("value").toLowerCase();
    var inputShapeVl = inputShapeEl.property("value").toLowerCase();

    // Filter data from UFO data
    var filteredData = ufoData.filter(ufo => (ufo.datetime === inputDateVl || inputDateVl === "") &&
                                             (ufo.country === inputCountryVl || inputCountryVl === "") &&
                                             (ufo.state === inputStateVl || inputStateVl === "") && 
                                             (ufo.city === inputCityVl || inputCityVl === "") &&
                                             (ufo.shape === inputShapeVl || inputShapeVl === ""));

    // Append UFO data to UFO table
    filteredData.forEach((ufo) => {
        var row = ufo_table.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.attr("class","table-cell");
            cell.text(value);
          });
    })
});
