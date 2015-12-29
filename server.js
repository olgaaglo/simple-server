var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {


  var parsedUrl = url.parse(req.url, true);
  var query = parsedUrl.query;

  var page = 'Here is your random number: ' + Math.random();

  if (query.secret) {
    if (query.secret === 'sauce') {
      page = 'my secret area';
    }
  }



  res.end(page)
})

server.listen(process.env.PORT || 3000)
