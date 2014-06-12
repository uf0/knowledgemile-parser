var fs = require('fs');
var d3 = require('d3');
 
var dataset = d3.range(101)
 
var width = 60,
    height = 10,
    color = '#7495B1';

var scale = d3.scale.linear().domain([0,100]).range([0,60])

var css = ""
 
dataset.forEach(function(d){
    var w = scale(d);
    var svg = '<svg width=\"60\" height=\"10\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"60\" height=\"10\" fill=\"white\" stroke=\"#7495B1\"/><rect width=\"' + w +'\" height=\"10\" fill=\"#7495B1\" stroke-width=\"0\"/></svg>'
    fs.writeFile('data/barchart/bachart_' + d +'.svg', svg);
    css = css + '[value=' + d +']{point-file:url(barchart/bachart_' + d + '.svg);}\n'
})

fs.writeFile('data/barchart/bachart.css', css);