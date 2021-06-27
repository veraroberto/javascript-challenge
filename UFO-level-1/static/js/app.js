// from data.js
var tableData = data;

// YOUR CODE HERE!



var tbody = d3.select("tbody");


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

//Reset Buttons

var resetButton = d3.select("#reset-btn")
resetButton.on("click",cleanTable);
function cleanTable() {
  var tbody = d3.select("tbody");
  // Cleans the table
  tbody.html("");



  //Recalls the Original Data
  UFOData(tableData)

}

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
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // var inputValue = inputElement.property("valueAsDate");
  // MM/DD/YYYY
  var dateString = inputValue.split("/");
  var month = parseInt(dateString[0]);
  var day = parseInt(dateString[1]);
  
  var year = parseInt(dateString[2]);

  // console.log(inputValue);
  // console.log(dateString);
  console.log(month);
  console.log(day);
  console.log(year);

  // console.log(tableData);
  var inputDate = `${month}/${day}/${year}`;
  console.log(inputDate);
  var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

  // console.log(filteredData);


  // // Then, select the unordered list element by class name
  var list = d3.select("#ufo-table-body");

  // // remove any data from the list to
  list.html("");

  // Filter Data
  UFOData(filteredData);


};
