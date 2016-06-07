// load up server and basic routes 
var express = require('express');
var helpers = require('./server_helpers/middleware');
var requestHandler = require('./server_helpers/request-handler'); 
var bodyParser = require('body-parser');

var db = require('./db/config.js');

/** Loads all models and collections
* Models represents the rows
* Collections represents the table itself
*/
var Image = require('./db/models/image.js');
var Images = require('./db/collections/images.js');
var Arc = require('./db/models/arc.js');
var Arcs = require('./db/collections/arcs.js');
var User = require('./db/models/user.js');
var Users = require('./db/collections/users.js');

var app = express();

var port = 4000;
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); // Fixes 404 errors for empty response body
app.use(helpers.logger);
app.use(express.static(__dirname + '/../public')); 

app.get('/', requestHandler.main.get);

app.get('/signin', requestHandler.signin.get);  
app.post('/signin', requestHandler.signin.post);

app.get('/create', requestHandler.create.get);
app.post('/create', requestHandler.create.post); 

app.get('/dashboard', requestHandler.dashboard.get); 

app.listen(port, function () {
  console.log('Listening on port:', port, '!');
});