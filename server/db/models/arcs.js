var db = require('../config.js');

var Arc = db.model.extend({
  tableName: 'arcs',
  hasTimestamps: true,

  images: function () {
    return this.hasMany(Image);
  },

  initialize: function () {
    
  }
});

module.exports = Arc;