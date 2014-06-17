// This is the actual server code application thingy dingy
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
  if (path.extname(req.url) === '.ico') { return res.end(); }
  var resourcePath = path.resolve(__dirname + req.url);
  var readStream = fs.createReadStream(resourcePath);
  var evaluateFile = function() {
    readStream.on('open', function() { readStream.pipe(res); });
    readStream.on('error', function(err) { res.end(err); });
  };
  if (path.extname(req.url)) { evaluateFile();
  } else if (path.extname(req.url) === '') {
    resourcePath = (path.resolve(resourcePath + '/index.html'));
      evaluateFile();
  } else { res.writeHead(404); }
});

console.log('the server is listening');
server.listen(8000);
