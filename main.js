// Convert CSV to JSON
var Converter = require("csvtojson").Converter
var converter = new Converter({})

converter.fromFile("data.csv", function(err, result) {
	// Creating Obj with unique value
	var dataObj = {}

	for (var i = 0; i < result.length; i++) {
		var material = result[i].Material
		var batch = result[i].Batch
		var quantity = result[i].Quantity
		var key = material + ";" + batch
		// console.log(key)
		dataObj[key] = 0
	}

	// Add quantities
	for (var i = 0; i < result.length; i++) {
		var key = result[i].Material + ";" + result[i].Batch
		var quantity = result[i].Quantity
		dataObj[key] = dataObj[key] + quantity

	}
	console.log(dataObj)
});



// Add Quantities

// Create Bar Codes

// Create HTML page
