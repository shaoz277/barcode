// Convert CSV to JSON
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var deasync = require('deasync');
var cp = require('child_process');
var exec = deasync(cp.exec);

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

function main(){
	Convert();
	SyncFunction();
	console.log(data);
}

main();


// Add Quantities

// Create Bar Codes

// Create HTML page
