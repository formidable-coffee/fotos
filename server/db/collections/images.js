var db = require('../config.js');
require('../models/image.js');

var Images = new db.Collection();

Images.model = 'Image';

module.exports = Images;