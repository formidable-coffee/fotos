var db = require('../config.js');
var Arc = require('arc.js');

var User = db.Model.extend({
  tableName: 'users',

  arcs: function () {
    return this.hasMany(Arc);
  }
});

module.exports = User;