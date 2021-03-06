var fs = require('fs')
var d3 = require('d3')

var services = [
  {path: "8", group: "environment_safety", name : "smoking"}, 
  {path: "9", group: "environment_safety", name : "danger"}, 
  {path: "10", group: "environment_safety", name : "trashbins"}, 
  {path: "11", group: "environment_safety", name : "resting"}, 
  {path: "12", group: "environment_safety", name : "wheelchair"}, 
  {path: "13", group: "environment_safety", name : "plants"}, 
  {path: "14", group: "environment_safety", name : "flowers"},
  {path: "16", group: "environment_safety", name : "cctv"}
  ]


services.forEach(function(s){

	var file_name = s.path + "_" + s.group + "_" + s.name + ".json";

	var minLat = 52.344052
	var maxLat =  52.372817
	

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

	var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

	data.features.forEach(function(d){
		var value = +d.geometry.coordinates[1]
		var chunk = Math.floor(scale(value)).toString()
		if(chunk<=50 && chunk>=0){
				output[chunk]++
		}
	})

	output = d3.entries(output)

	fs.writeFile("data/final/" + file_name, JSON.stringify(output, null, 2));

	console.log(file_name + " saved!")

})