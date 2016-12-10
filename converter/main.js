// Convert CSV to JSON
var Converter = require("csvtojson").Converter
var converter = new Converter({})
var strArray = []
var html = []
var size = 0;
var loopCount = 0;
var fileName = ""

function GetBase64Img(imgsrc, str) {
  loopCount += 1;
  var htmlTag = '<img src="' + imgsrc + '"><br>\n'
  html.push(htmlTag)
  if (loopCount == size) {
    var strBase64Obj = {};
    for (i in strArray) {
      strBase64Obj[strArray[i]] = html[i]
    }

    var strData = ""
    for (j in strBase64Obj) {
      var pTag = strBase64Obj[j] + "<p>" + j + "</p><br>\n"
      strData += pTag
    }
    console.log(fileName);
    var writeFile = require('write');
    writeFile.sync('../load_lists/' + fileName + '.html', strData);
  }
}

function GetResults (result) {
  var dataObj = {}
  fileName = result[0]["Truck#"]
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
	for (key in dataObj) {
		var tempStr = key + ";" + dataObj[key]
		strArray.push(tempStr)
	}

  size = strArray.length
  // Writing results to CSV
	// var write = require('fs').writeFile
	// write('temp/temp_data.csv', strArray
  var barcode = require('barcode');
  var html = {}
  for (i in strArray) {
    var code39 = barcode('code39', {
        data: strArray[i],
        width: 400,
        height: 100,
    });
    code39.getBase64(function (err, imgsrc) {
       GetBase64Img(imgsrc)
    });
  }
}

converter.fromFile("../data.csv", function(err, result) {
  GetResults(result)
});
