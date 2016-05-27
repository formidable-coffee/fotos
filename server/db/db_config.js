// configure the database 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function () {
    console.log('Connected to the database...')
})

// var testSchema = mongoose.Schema({
//   name: String
// });

// mongoose.model('Test', testSchema); 

module.exports = db;


