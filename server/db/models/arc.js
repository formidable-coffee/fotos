var db = require('../config.js');
var User = require('user.js');
var Image = require('image.js');

var Arc = db.model.extend({
  tableName: 'arcs',
  hasTimestamps: true,

  user: function () {
    return this.belongsTo(User);
  },

  images: function () {
    return this.hasMany(Image);
  }
});

module.exports = Arc;