// Convert CSV to JSON
var Converter = require("csvtojson").Converter
var converter = new Converter({})

converter.fromFile("data.csv", function(err, result) {
	// Creating Obj with unique value
	var uniqueValues = {}
	var indexValues = {}
	var index = 0

	for (var i = 0; i < result.length; i++) {
		var tempObj = {}
		tempObj["material"] = result[i].Material
		tempObj["batch"] = result[i].Batch
		tempObj["quantity"] = result[i].Quantity;
		indexValues[i] = tempObj;
		
	}

	for (key in indexValues) {
		var tempObj = {}
		tempObj["material"] = indexValues[key].material
		tempObj["batch"] = indexValues[key].batch
		tempObj["quantity"] = indexValues[key].quantity

		if (uniqueValues.length == undefined) {
			uniqueValues[index] = tempObj
			index += 1
		} else {
			// uniqueValues[index] = tempObj
			// index += 1

		}
	}
	console.log(uniqueValues)
	
});



// Add Quantities

// Create Bar Codes

// Create HTML page
