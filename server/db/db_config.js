// configure the database 
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test');

var testSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Test', testSchema); 


