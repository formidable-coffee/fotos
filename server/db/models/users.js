var bookshelf = require('../config.js');

var User = db.Model.extend({
  tableName: 'users',

  arcs: function () {
    return this.hasMany(Arc);
  },

  initialize: function () {
    
  }
});

module.exports = User;