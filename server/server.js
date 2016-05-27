// load up server and basic routes 
var express = require('express');
var app = express();
var helpers = require('./server_helpers/middleware');
var requestHandler = require('./server_helpers/request-handler'); 

var port = 4000;

app.use(helpers.logger);
app.use(express.static(__dirname + '/../public')); 

app.get('/', requestHandler.main.get);

app.get('/signin', requestHandler.signin.get);  
app.post('/signin', requestHandler.signin.post);

app.get('/create', requestHandler.create.get);
app.post('/create', requestHandler.create.post); 

app.get('/test', requestHandler.test.get);

app.listen(port, function () {
  console.log('Listening on port: ' + port + '!');
});