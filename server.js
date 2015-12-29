var http = require('http');

var server = http.createServer(function (req, res) {
  res.end('hello Olga')
})

server.listen(process.env.PORT || 3000)
