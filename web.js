var express = require('express');
var fs = require('fs');
var content = '';



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var cont = fs.readFileSync('index.html','utf-8');
  response.send(cont);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
