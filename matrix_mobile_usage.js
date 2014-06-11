var fs = require('fs')
var d3 = require('d3')

var file_name = "7_mobile_device_usage_usage.json"

var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));
var output = []

data.features.forEach(function(d){
		var elm = {}
		elm.type = d.properties.input[0].value
		elm.value = d.properties.input[1].value
		output.push(elm)
})

var nested = d3.nest().key(function(d){return d.type}).key(function(d){return d.value}).entries(output)

var output = []

nested.forEach(function(d){
	var source = d.key
	d.values.forEach(function(e){
		var target = e.key
		var value = e.values.length
		var elm = {}
		elm.source = source;
		elm.target = target;
		elm.value = value;
		output.push(elm)
	})
})

fs.writeFile("data/final/" + file_name, JSON.stringify(output, null, 2), function(err) {
	if(err) {
		console.log(err);
	}else{
		console.log("File saved!")
	}
});