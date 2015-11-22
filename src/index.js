var express = require('express');
var http = require('http');

var app = express();

var app.use('/api/v1', require('./endpoints'));

http
  .createServer(app)
  .listen(process.env.PORT || 9000, function() {
    console.log('Sort is listening on port 9000');
  });