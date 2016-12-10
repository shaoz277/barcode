// Convert CSV to JSON
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.fromFile("data.csv", function(err, result) {
	function doExist(array, uniqueValues) {
		for (var i = 0; i < uniqueValues.length; i++) {
			if (array[0] == uniqueValues["material"] && array[1] == uniqueValues["batch"]) {
				console.log('exist');
				return false
			}
		}
		return true
	}

	// Creating Obj with unique value
	var uniqueValues = {};
	var counter = 0;
	
	for (var i = 0; i < result.length; i++) {
		var tempObj = {};
		var tempArray = [];
		var material = result[i].Material;
		var batch = result[i].Batch;
		// var quantity = result[i].Quantity;

		tempObj["material"] = material;
		tempObj["batch"] = batch;
		tempObj["quantity"] = 0;

		tempArray.push(material);
		tempArray.push(batch);

		if (doExist(tempArray, uniqueValues)) {
			counter += 1;
			uniqueValues[counter] = tempObj;
		}

		// uniqueValues[i] = tempObj;
	}
	// console.log(uniqueValues)
});



// Add Quantities

// Create Bar Codes

// Create HTML page
