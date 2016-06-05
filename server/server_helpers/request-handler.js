var bodyParser = require('body-parser');
var path = require('path'); 
var db = require('../db/config');
var bluebird = require('bluebird'); 

module.exports.main = {
	get: function (req, res) {
		res.redirect('/signin'); 
	}
}; 

module.exports.signin = {
	get: function (req, res) {
		console.log('got here? '); 
		res.sendFile(path.normalize(__dirname + '/../../public/sign-in.html')); 
	}, 

	post: function (req, res) {
		console.log('got here'); 
		db.query(`INSERT INTO users (name) VALUES ('${user.username}');`, function (err, data) {
			if (err) {
				console.log(err, 'error in query'); 
			} else {
				res.sendStatus(200); 
				console.log('user found'); 
			}
		})
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