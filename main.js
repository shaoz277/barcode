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

	// Add Quantities
	for (var i = 0; i < result.length; i++) {
		var key = result[i].Material + ";" + result[i].Batch
		var quantity = result[i].Quantity
		dataObj[key] = dataObj[key] + quantity

	}

	// Create Strings
	var strArray = []
	for (key in dataObj) {
		var tempStr = key + ";" dataObj[key]
		console.log(tempStr)
	}
});





// Create Bar Codes

// Create HTML page
