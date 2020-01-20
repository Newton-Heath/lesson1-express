var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response) {
    response.send('<h1>Hello Coders.Tokyo</h1>');
});

app.get('/users', function(request, response) {
    response.send('<h2>User list</h2>');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});