// function to help the server run more efficiently and connec to the db 

// import the db
// var testModel = require('../db/db_config');

// logging function for server 

exports.logger = function(req, res, next) {
  console.log(`Getting a request to '${req.method}' at '${req.url}'. Time is: ${new Date()}`);
  next();
};

// exports.getAll = function(req, res) {
//   testModel.find({})
//   .then(function(results){
//     res.json(results);
//   })
//   .catch(function(err) {
//     console.log(err);
//     res.send('404');
//   })
// };