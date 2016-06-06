// configure the database 
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'admin',
    password : 'formidable',
    database : 'fotos',
    charset  : 'UTF8'
  },
  useNullAsDefault: true
});


var db = require('bookshelf')(knex);
db.plugin('registry'); // resolves circular dependencies
/************************************************************/
// Schemas for all tables used
/************************************************************/

/* Users table */
db.knex.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('name', 100);
      user.string('fbId', 255);
      user.string('access_token', 255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

/* Arcs table */
db.knex.schema.hasTable('arcs').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('arcs', function (arc) {
      arc.increments('id').primary();
      arc.string('name', 100);
      arc.timestamps();
      arc.string('criteria', 255);
      arc.date('query_start_date');
      arc.date('query_end_date');
      arc.integer('user_id').unsigned().references('users.id'); // unsigned() is NECESSARY in mysql
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

/* Images table */
db.knex.schema.hasTable('images').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('images', function (image) {
      image.increments('id').primary();
      image.integer('height');
      image.integer('width');
      image.string('url', 255);
      // could also potentially use table here so that 1 image can be in more than 1 arc
      image.integer('arc_id').unsigned().references('arcs.id');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;