var db = require('../config.js');
require('../models/arc.js');

var Arcs = new db.Collection();

Arcs.model = 'Arc';

module.exports = Arcs;