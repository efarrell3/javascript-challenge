// from data.js
var tableData = data;
console.log(tableData);

// referenece to the table body
var tbody = d3.select("tbody");

// UFO sighting values for each column
tableData.forEach((report) => {
    console.log(report);
    // Append one table row 'tr' for each UFO Sighting
    var row = tbody.append("tr");

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });



    // Use 'Object.entries' to console.log each UFO sighting value
   //  Object.defineProperties(ufoSighting).forEach(function([key, value])) {
       //  console.log(key, value);
        // Append a cell to the row for each value
        // var cell = row.append("td");
      //   cell.text(value);
    // };
});

// Select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

// Remove existing table
d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter reports
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// Display the filtered dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});
// YOUR CODE HERE!
