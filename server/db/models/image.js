var db = require('../config.js');
var Arc = require('arc.js');

var Image = db.Model.extend({
  tableName: 'images',

  arc: function () {
    return this.belongsTo(Arc);
  }
});

module.exports = Image;