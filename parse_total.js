var fs = require('fs')


var file_name = "total.json";

var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

data.features.forEach(function(d){
	d.geometry.coordinates[0] = +d.geometry.coordinates[0]
	d.geometry.coordinates[1] = +d.geometry.coordinates[1]
})

fs.writeFileSync("data/test/" + file_name, JSON.stringify(data, null, 2));

console.log(file_name + " saved!")
