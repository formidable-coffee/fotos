var db = require('../config.js');
require('../models/user.js');

var Users = new db.Collection();

Users.model = 'User';

module.exports = Users;