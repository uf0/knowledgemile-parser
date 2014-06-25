var fs = require('fs');
var d3 = require('d3');
var xmldom = require('xmldom');

var services = [
  "8_environment_safety_smoking.json",
  "9_environment_safety_danger.json",
  "10_environment_safety_trashbins.json",
  "11_environment_safety_resting.json",
  "12_environment_safety_wheelchair.json",
  "13_environment_safety_plants.json",
  "14_environment_safety_flowers.json",
  "16_environment_safety_cctv.json",
  "bird_15_environment_safety_animals.json",
  "cat_15_environment_safety_animals.json",
  "dog_15_environment_safety_animals.json",
  "other_15_environment_safety_animals.json"
]

var s = services[11]

var width = 1118,
    height = 111;
    //height = 49
    //height = 76

var data = JSON.parse(fs.readFileSync('data/final/' + s, encoding='utf8'));
 
 
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1, 0);

var y = d3.scale.linear()
    .range([height, 0]);


x.domain(data.map(function(d) { return d.key; }));
y.domain([0, d3.max(data, function(d) { return d.value; })]);

svg.selectAll(".bar")
  .data(data)
.enter().append("rect")
  .attr("class", "bar")
  .attr("fill", "#f00")
  .attr("x", function(d) { return x(d.key); })
  .attr("y", function(d) { return y(d.value); })
  .attr("height", function(d) { return (height - y(d.value)); })
  .attr("width", x.rangeBand());

var svgGraph = d3.select('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg');
var svgXML = (new xmldom.XMLSerializer()).serializeToString(svgGraph[0][0]);
fs.writeFileSync('data/final/graph/' + s + '.svg', svgXML);