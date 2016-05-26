// Get /
// POST /signin
// GET /create
// POST /create
var bodyParser = require('body-parser');


module.exports.signin = {
	get: function (req, res) {
		res.send('success'); 
	}, 

	post: function (req, res) {
		res.redirect('/'); 
	}
}; 

module.exports.create = {
	get: function (req, res) {
		res.send('success'); 
	}, 

	post: function (req, res) {
		res.send('success'); 
	}
}