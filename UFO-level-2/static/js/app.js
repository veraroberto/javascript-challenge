// from data.js
var tableData = data;








//
function UFOData(data) {
  var tbody = d3.select("tbody");

  for (var i = 0; i < data.length; i++) {
    var row = tbody.append("tr");
    ufoEvent = Object.values(data[i]);

    // 
    dateEvent = row.append("td").text(ufoEvent[0]);
    cityEvent = row.append("td").text(ufoEvent[1].toUpperCase());
    stateEvent = row.append("td").text(ufoEvent[2].toUpperCase()); 
    countryEvent = row.append("td").text(ufoEvent[3].toUpperCase());  
    shapeEvent = row.append("td").text(ufoEvent[4].toUpperCase()); 
    durationEvent = row.append("td").text(ufoEvent[5]); 
    commentsEvent = row.append("td").text(ufoEvent[6]); 

  };

};

UFOData(tableData);


// reference: https://codeburst.io/javascript-array-distinct-5edc93501dc4
var unique = (value, index, self) => {
  return self.indexOf(value) === index
};

var filterDate = d3.select("#datetimeFilter");
var dates = tableData.map(tableData => tableData.datetime).filter(unique).sort();


var filterCity = d3.select('#cityFilter');
var city = tableData.map(tableData => tableData.city.toUpperCase()).filter(unique).sort();

var filterState = d3.select('#stateFilter');
var state = tableData.map(tableData => tableData.state.toUpperCase()).filter(unique).sort();

var filterCountry = d3.select('#countryFilter');
var country = tableData.map(tableData => tableData.country.toUpperCase()).filter(unique).sort();

var filterShape = d3.select('#shapeFilter');
var shape = tableData.map(tableData => tableData.shape).filter(unique).sort();


// console.log(dates);
// console.log(city);
// console.log(state);
// console.log(country);
// console.log(shape);





dates.forEach(date => {
  filterDate.append("option").text(date)
});


city.forEach(city => {
  filterCity.append("option").text(city)
});

state.forEach(state => {
  filterState.append("option").text(state)
});

country.forEach(country => {
  filterCountry.append("option").text(country)
});

shape.forEach(shape => {
  filterShape.append("option").text(shape)
});


var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetimeFilter");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // console.log(filteredData);


  // // Then, select the unordered list element by class name
  var list = d3.select("#ufo-table-body");

  // // remove any data from the list to
  list.html("");

  // Filter Data


  UFOData(filteredData);


};




