var db = require('../config.js');
require('./arc');

var Image = db.Model.extend({
  tableName: 'images',

  arc: function () {
    return this.belongsTo('Arc', 'arc_id');
  }
});

module.exports = db.model('Image', Image);