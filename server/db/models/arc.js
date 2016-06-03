var db = require('../config.js');
require('./user');
require('./image');

var Arc = db.Model.extend({
  tableName: 'arcs',
  hasTimestamps: true,

  user: function () {
    return this.belongsTo('User');
  },

  images: function () {
    return this.hasMany('Image');
  }
});

module.exports = db.model('Arc', Arc);