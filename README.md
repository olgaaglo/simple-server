# Simple node.js server

First attempt at creating a node.js server with authentication.

First part was to create the server:
  - create a server.js file on your editor
  - add this code

```js
var http = require('http')

var server = http.createServer(function (req, res) {
  res.end('ok')
})

server.listen(3000)
```
