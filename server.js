// This is the actual server code application thingy dingy
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
  console.log(__dirname);
  console.log(req.url);
  var resourcePath = path.resolve(__dirname + req.url);
  fs.createReadStream(resourcePath, {encoding: 'utf8'}).pipe(res);
});

console.log('the server is listening');
server.listen(8000);
