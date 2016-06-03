var db = require('../config.js');
require('./arc');

var User = db.Model.extend({
  tableName: 'users',

  arcs: function () {
    return this.hasMany('Arc');
  }
});

module.exports = db.model('User', User);