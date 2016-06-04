/**
 *  This file should be a standalone script that seeds your database,
 *  making testing interactions with your database much easier.
 *
 *  You should be able to run this file from Terminal with:
 *
 *    node ./seed.js
 *  
 *  And populate your database with all the data from `data.json`
 */

var db = require('./server/db/config.js');
var Image = require('./server/db/models/image.js');
var Images = require('./server/db/collections/images.js');
var Arc = require('./server/db/models/arc.js');
var Arcs = require('./server/db/collections/arcs.js');
var User = require('./server/db/models/user.js');
var Users = require('./server/db/collections/users.js');

// 1. Import data from data.json
var data = require('./data.json');

// 2. Drop old data

// 3. Add data from data.json
// console.log(Users.create);
Users.create({
  name: data.name,
  username: data.username
}).then(function (newUser) {
  console.log("A new user has been added: ", newUser);
});