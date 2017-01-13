var express = require('express');
var app = express();

// GET '/' => '/public/index.html'
app.use( express.static(__dirname + '/public' ));
app.set('view engine', 'ejs'); // res.render(file) => '/views/file'


var port = 3000;
app.listen(port, function(){
  console.log('Up!');
});
