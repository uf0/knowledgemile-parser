var request = require('request');
var fs = require('fs')

var services = [
  {path: "1", group: "traffic", name : "bikes"},
  {path: "2", group: "traffic", name : "cars_parking"}, 
  {path: "3", group: "traffic", name : "bikes_parking"}, 
  {path: "4", group: "traffic", name : "bikes_wrong"}, 
  {path: "5", group: "traffic", name : "red_light"}, 
  {path: "6", group: "social_interaction", name : "interaction"}, 
  {path: "7", group: "mobile_device_usage", name : "usage"}, 
  {path: "8", group: "environment_safety", name : "smoking"}, 
  {path: "9", group: "environment_safety", name : "danger"}, 
  {path: "10", group: "environment_safety", name : "trashbins"}, 
  {path: "11", group: "environment_safety", name : "resting"}, 
  {path: "12", group: "environment_safety", name : "wheelchair"}, 
  {path: "13", group: "environment_safety", name : "plants"}, 
  {path: "14", group: "environment_safety", name : "flowers"},
  {path: "15", group: "environment_safety", name : "animals"}, 
  {path: "16", group: "environment_safety", name : "cctv"},  
  {path: "17", group: "fashion", name : "skirt"}, 
  {path: "18", group: "fashion", name : "bag"}, 
  {path: "19", group: "fashion", name : "gucci"}
  ]

var loading = 0
var tot = services.length

services.forEach(function(d,i){
  var options = {
    url: 'http://95.85.12.5/datalist/' + d.path
  };

  request(options, function(err, res, body) {
    if(err){console.log(err)}
    else{ 
      var data = JSON.parse(body)
      fs.writeFile("data/" + d.group + "_" + d.name + ".json", JSON.stringify(data, null, 2), function(err) {
        if(err) {
          console.log(err);
          loading++
          console.log(loading + "/" + tot)
        }else{
          loading++
          console.log(loading + "/" + tot)
        }
      });
    }
  }); 
})

