// from data.js
var tableData = data;


//
function UFOData(data) {
  var tbody = d3.select("tbody");

  for (var i = 0; i < data.length; i++) {
    var row = tbody.append("tr");
    ufoEvent = Object.values(data[i]);

    row.append("td").text(ufoEvent[0]);
    row.append("td").text(ufoEvent[1].toUpperCase());
    row.append("td").text(ufoEvent[2].toUpperCase());
    row.append("td").text(ufoEvent[3].toUpperCase());
    row.append("td").text(ufoEvent[4].toUpperCase());
    row.append("td").text(ufoEvent[5]);
    row.append("td").text(ufoEvent[6]);

  };

};

UFOData(tableData);


// reference: https://codeburst.io/javascript-array-distinct-5edc93501dc4
var unique = (value, index, self) => {
  return self.indexOf(value) === index
};

//Creates the Filters of the Unique Value for each column
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


// var button = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn")

//Filter handler
d3.selectAll("select").on("change",runEnter);
resetButton.on("click",cleanTable);




function cleanTable() {
  var tbody = d3.select("tbody");
  // Cleans the table
  tbody.html("");


  d3.select("#datetimeFilter").property('value',"");
  d3.select("#cityFilter").property("value","");
  d3.select("#stateFilter").property("value","");
  d3.select("#countryFilter").property("value","");
  d3.select("#shapeFilter").property("value","");


  //Recalls the Original Data
  UFOData(tableData)

}


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetimeFilter").property("value");
  var inputCity = d3.select("#cityFilter").property("value");
  var inputState = d3.select("#stateFilter").property("value");
  var inputCountry = d3.select("#countryFilter").property("value");
  var inputShape = d3.select("#shapeFilter").property("value");

  var filteredData = tableData.filter(tableData =>
    (tableData.datetime === inputDate || !inputDate)
    && (tableData.city.toUpperCase() === inputCity || !inputCity)
    && (tableData.state.toUpperCase() === inputState || !inputState)
    && (tableData.country.toUpperCase() === inputCountry || !inputCountry)
    && (tableData.shape === inputShape || !inputShape)


  );

  // // Then, select the unordered list element by class name
  var list = d3.select("#ufo-table-body");

  // // remove any data from the list to
  list.html("");

  // Filter Data


  UFOData(filteredData);


};




