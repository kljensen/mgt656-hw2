var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('I am awesome!');
});

app.get('/jhm43', function(request, response){
    response.send('And, I can follow instructions ;)');
});

app.listen(process.env.PORT || 4000);