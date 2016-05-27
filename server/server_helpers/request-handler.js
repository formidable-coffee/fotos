var bodyParser = require('body-parser');
var path = require('path')

module.exports.main = {
	get: function (req, res) {
		res.redirect('/signin'); 
	}
}; 

module.exports.signin = {
	get: function (req, res) {
		res.sendFile(path.normalize(__dirname + '/../../public/sign-in.html')); 
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