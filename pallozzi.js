var fs = require('fs')

var services = [
  {path: "1", group: "traffic", name : "bikes"},
  {path: "4", group: "traffic", name : "bikes_wrong"}, 
  {path: "5", group: "traffic", name : "red_light"}
  ]

services.forEach(function(s){

	var file_name = s.path + "_" + s.group + "_" + s.name + ".json";

	var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

	data.features.forEach(function(d){
		d.properties.value = Math.sqrt(+d.properties.input[0].value/Math.PI)*2
		d.geometry.coordinates[0] = +d.geometry.coordinates[0]
		d.geometry.coordinates[1] = +d.geometry.coordinates[1]
		delete d.properties.input
	})

	fs.writeFileSync("data/final/" + file_name, JSON.stringify(data, null, 2));

	console.log(file_name + " saved!")

})