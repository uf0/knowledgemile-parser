var fs = require('fs')
//var file_name = "3_traffic_bikes_parking.json"

var services = [
  {path: "3", group: "traffic", name : "bikes_parking"}, 
  {path: "17", group: "fashion", name : "skirt"}
  ]

services.forEach(function(s){

	var file_name = s.path + "_" + s.group + "_" + s.name + ".json";

	var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

	data.features.forEach(function(d){
		d.properties.value = +d.properties.input[0].value
		d.geometry.coordinates[0] = +d.geometry.coordinates[0]
		d.geometry.coordinates[1] = +d.geometry.coordinates[1]
		delete d.properties.input
	})

	fs.writeFileSync("data/final/" + file_name, JSON.stringify(data, null, 2));

	console.log(file_name + " saved!")

});