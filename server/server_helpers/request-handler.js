var bodyParser = require('body-parser');
var path = require('path'); 
var User = require('../db/models/user');
var bluebird = require('bluebird'); 

module.exports.main = {
	get: function (req, res) {
		res.redirect('/signin'); 
	}
}; 

module.exports.signin = {
	get: function (req, res) {
		res.sendFile(path.normalize(__dirname + '/../../public/index.html')); 
	}, 

	post: function (req, res) {
		console.log('post request', req.body); 
		new User({name: req.body.name, access_token: req.body.id}).save().then(function(data){
			console.log('user should have saved', data); 
			res.redirect('/create'); // How do you redirect to React path? 
		});
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