var fs = require('fs')
var file_name = "6_social_interaction_interaction.json"

var data = JSON.parse(fs.readFileSync('data/' + file_name, encoding='utf8'));

data.features.forEach(function(d){
	d.properties.value = d.properties.input[1].value
	d.geometry.coordinates[0] = +d.geometry.coordinates[0]
	d.geometry.coordinates[1] = +d.geometry.coordinates[1]
	delete d.properties.input
})

fs.writeFile("data/final/geojson_" + file_name , JSON.stringify(data, null, 2), function(err) {
	if(err) {
		console.log(err);
	}else{
		console.log("File saved!")
	}
});