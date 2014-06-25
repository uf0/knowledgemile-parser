var fs = require('fs')

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

	var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

	data.features.forEach(function(d){
		d.geometry.coordinates[0] = +d.geometry.coordinates[0]
		d.geometry.coordinates[1] = +d.geometry.coordinates[1]
	})

	fs.writeFileSync("data/test/" + file_name, JSON.stringify(data, null, 2));

	console.log(file_name + " saved!")

})