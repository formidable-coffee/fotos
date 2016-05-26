// load up server and basic routes 
var express = require('express');
var app = express();
var helpers = require('./server_helpers/middleware');
var requestHandler = require('./server_helpers/request-handler'); 


app.use(helpers.logger);
app.use(express.static(__dirname + '/../public')); 

app.get('/signin', function(req, res) { res.render('index')}); 
app.post('/signin', requestHandler.signin.post);

app.get('/create', requestHandler.create.get);
app.post('/create', requestHandler.create.post); 

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});