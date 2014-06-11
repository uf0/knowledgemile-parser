var fs = require('fs')
var file_name = "1_traffic_bikes.json"

var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

data.features.forEach(function(d){
	d.properties.value = Math.sqrt(+d.properties.input[0].value/Math.PI)*2
	d.geometry.coordinates[0] = +d.geometry.coordinates[0]
	d.geometry.coordinates[1] = +d.geometry.coordinates[1]
	delete d.properties.input
})

fs.writeFile("data/final/" + file_name, JSON.stringify(data, null, 2), function(err) {
	if(err) {
		console.log(err);
	}else{
		console.log("File saved!")
	}
});