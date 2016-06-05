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
Users.reset()
  .query({where: {name: data.name}})
  .fetch()
  .then(function (allUsers) {
    if (allUsers.length > 0) {
      console.log('This username, ' + data.name + ' already exists in the database');
      return;
    } else {
// 3. Add data from data.json
      var user = new User({
        name: data.name,
        token: data.access_token
      }).save().then(function (newUser) {
        console.log("A new user has been added => ", newUser);
      });

      User.forge({username: data.username})
        .fetch()
        .then(function (userMatched) {
          // create new Arc
          var arc = new Arc({
            name: data.arcName
          });

          // attach foreign key in arc
          return arc.save({user_id: userMatched.id});
        })
        .then(function (newArc) {
          console.log("A new arc has been added =>", newArc);

          for (var i = 0; i < data.url.length; i++) {
            // create new image
            var image = new Image({
              url: data.url[i]
            });

            // attach foreign key in image
            image.save({arc_id: newArc.id});
            console.log("A new img has been added => ", image);
          };
        });   
    }
  });



// collections are merely used as temp storage for many rows of data
  // should be periodically reset with collection.reset()