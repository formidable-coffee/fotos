var db = require('../config.js');
var Arc = require('../models/arc.js');

var Arcs = new db.Collection();

Arcs.model = Arc;

module.exports = Arcs;