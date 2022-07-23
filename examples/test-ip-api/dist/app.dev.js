"use strict";

var express = require('express');

var app = express();
var port = 4000; // Template Engine

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express["static"](__dirname + '/public'));
app.get('/', function (req, res) {
  res.render('index', {
    subtitulo: 'SubTitulo dinamico'
  });
});
app.use(function (req, res, next) {
  res.status(404).sendFile(dirname + '/public/404.html');
});
app.listen(port, function () {
  return console.log('Server listening on port 4000!');
}, console.log('server url: http://localhost:4000/'));