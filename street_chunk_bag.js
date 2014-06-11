var fs = require('fs')
var d3 = require('d3')
var file_name = "18_fashion_bag.json"

var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

data.features.forEach(function(d){
	d.properties.value = d.properties.input[1].value
	d.geometry.coordinates[0] = +d.geometry.coordinates[0]
	d.geometry.coordinates[1] = +d.geometry.coordinates[1]
	delete d.properties.input
})

var newData = d3.nest().key(function(d){return d.properties.value}).entries(data.features)

newData.forEach(function(d){
	var minLat = 52.346357
	var maxLat =  52.354208

	var diffLat = maxLat - minLat

	var stepLat = diffLat/50

	var domain = []
	var output = {}

	d3.range(50).forEach(function(d){
		domain.push(minLat+(d*stepLat))
		output[d.toString()] = 0
	})

	domain.reverse()

	var scale = d3.scale.linear().domain(domain).range(d3.range(50))

	d.values.forEach(function(d){
		var value = +d.geometry.coordinates[1]
		var chunk = Math.floor(scale(value)).toString()
		if(chunk<=50 && chunk>=0){
				output[chunk]++
		}
	})

	output = d3.entries(output)

	fs.writeFile("data/final/" + d.key + "_" + file_name, JSON.stringify(output, null, 2), function(err) {
		if(err) {
			console.log(err);
		}else{
			console.log("File saved!")
		}
	});
})
