var fs = require('fs');
var d3 = require('d3');
var xmldom = require('xmldom');

var file_name = "14_environment_safety_flowers.json"
 
var data = JSON.parse(fs.readFileSync('data/final/' + file_name, encoding='utf8'));
 
var width = 1118,
    height = 49;
 
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

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
  .attr("height", function(d) { return height - y(d.value); })
  .attr("width", x.rangeBand());
  
// get a reference to our SVG object and add the SVG NS  
var svgGraph = d3.select('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg');
var svgXML = (new xmldom.XMLSerializer()).serializeToString(svgGraph[0][0]);
fs.writeFile('data/graph.svg', svgXML);