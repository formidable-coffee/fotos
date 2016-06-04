var db = require('../config.js');
var Image = require('../models/image.js');

var Images = new db.Collection();

Images.model = Image;

module.exports = Images;