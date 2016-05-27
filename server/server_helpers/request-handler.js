var bodyParser = require('body-parser');
var path = require('path')
var db = require('../db/db_config.js');
var ImgUrl = require('../db/models/imgUrl.js');

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
};

module.exports.test = {
	get: function (req, res) {
		console.log('Received GET req at /test')
		ImgUrl.find({}).exec(function (err, results) {
			res.status(200).send(results);
		})
	}
}