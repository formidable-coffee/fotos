var db = require('../config.js');
require('./arc');

var User = db.Model.extend({
  tableName: 'users',

  arcs: function () {
    return this.hasMany('Arc', 'user_id');
  }
});

module.exports = db.model('User', User);