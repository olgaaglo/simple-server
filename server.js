var http = require('http');

var server = http.createServer(function (req, res) {
  res.end('Here is your random number: ' + Math.random())
})

server.listen(process.env.PORT || 3000)
