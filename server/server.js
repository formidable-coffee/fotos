// load up server and basic routes 
var express = require('express');
var app = express();
var helpers = require('./server_helpers/middleware');


app.use(helpers.logger);

app.get('/', helpers.getAll);


app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});