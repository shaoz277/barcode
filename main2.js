// Convert CSV to JSON
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var data = {};

function Convert() {
	converter.fromFile("data.csv", function(err, result) {
		for (var i = 0; i < result.length; i++) {
			var tempObj = {}
			tempObj["material"] = result[i].Material;
			tempObj["batch"] = result[i].Batch;
			tempObj["quantity"] = result[i].Quantity;
			data[i] = tempObj;
		}
	});
}

function SyncFunction(){
	var ret;
	setTimeout(function(){
		ret = "hello";
	}, 1000);
	while(ret === undefined) {
		require('deasync').sleep(100);
	}
	// returns hello with sleep; undefined without
	return ret;    
}

function doExist(array, uniqueValues) {
	for (var i = 0; i < uniqueValues.length; i++) {
		if (array[0] == uniqueValues["material"] && array[1] == uniqueValues["batch"]) {
			console.log('exist');
			return false
		}
	}
	return true
}

function main() {
	Convert();
	SyncFunction();

	// Creating Obj with unique value
	var uniqueValues = {};
	var counter = 0;
	for (var i = 0; i < Object.keys(data).length; i++) {
		var tempObj = {};
		var tempArray = [];
		var material = data[i].Material;
		var batch = data[i].Batch;
		// var quantity = data[i].Quantity;

		tempObj["material"] = material;
		tempObj["batch"] = batch;
		tempObj["quantity"] = 0;

		tempArray.push(material);
		tempArray.push(batch);

		console.log(tempArray);

		if (doExist(tempArray, uniqueValues)) {
			counter += 1;
			// uniqueValues[counter] = tempObj;
		}
	}
}

main();


// Add Quantities

// Create Bar Codes

// Create HTML page
