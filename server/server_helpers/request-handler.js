var bodyParser = require('body-parser');
var path = require('path');
var bluebird = require('bluebird'); 
var url = require('url');
var db = require('../db/config.js');
var Users = require('../db/collections/users');
var User = require('../db/models/user');

var Arc = require('../db/models/arc'); 
var Arcs = require('../db/collections/arcs'); 

var Image = require('../db/models/image.js');
var Images = require('../db/collections/images.js');

var limit = 5;

module.exports.main = {
  get: function (req, res) {
    res.redirect('/signin'); 
  }
}; 

module.exports.signin = {
  get: function (req, res) {
    res.sendFile(path.normalize(__dirname + '/../../public/index.html')); 
  }, 

  post: function (req, res) {
    console.log('post request', req.body); 
    Users.reset()
      .query({where: {fbId: req.body.userId}})
      .fetch()
      .then(function (allUsers) {
        if (allUsers.length > 0) {
          // this needs to update database and not just console log
          console.log('This username, ' + req.body.userId + ' already exists in the database');
        } else {
          new User({name: req.body.name, fbId: req.body.userId, access_token: req.body.access_token})
          .save()
          .then(function(data){
            console.log('user should have saved', data); 
          });
        }
        res.writeHead(201); 
        // res.redirect('/dashboard'); // How do you redirect to React path? 
        res.end(); 
      }); 
  }
}; 

// take an array and return arr selecting only =limit # of elements
var minimizeArr = function (arr, targetLength) {
  var totalLen = arr.length;
  var di = totalLen/targetLength;
  var results = [];

  if (totalLen <= targetLength) {
    return arr;
  } else {
    for (var i = 0; i < totalLen; i += di) {
      results.push(arr[Math.floor(i)]);
    }
  }
  return results;
}

module.exports.create = {
  get: function (req, res) {
    res.send('success'); 
  }, 

  post: function (req, res) {
    // store obj from fb api calls into db
    console.log("post request from client", req.body);
    var imgUrl = minimizeArr(req.body.photos.data, limit);
      // user has already been created
        User.forge({fbId: req.body.id})
          .fetch()
          .then(function (userMatched) {
            // make new arc
            var arc = new Arc({
              name: Date()
            });
            return arc.save({user_id: userMatched.id});
          })
          .then(function (newArc) {
            console.log("A new arc has been added =>", newArc);

          // store img into new arc
            for (var imgId = 0; imgId < imgUrl.length; imgId++) {
              var imgSizeArr = imgUrl[imgId].images;
              // for (var imgSize = 0; imgSize < imgSizeArr.length; imgSize++) {
                // var img = imgSizeArr[imgSize];
                var img = imgSizeArr[0];
                var image = new Image({
                  height: img.height,
                  width: img.width,
                  url: img.source
                });

                image.save({arc_id: newArc.id});
                console.log("A new img has been added => ", image);
              // }
            }
          });
    res.send('success'); 
  }
}

module.exports.dashboard = {
	get: function(req, res) {
		var url_parts = url.parse(req.url, true);
		var userId = url_parts.query.user_id;

    var results = [];
    User.forge({fbId: userId})
      .fetch()
      .then(function (userMatched) {
        Arcs.reset()
          .query({where: {user_id: userMatched.id}})
          .fetch()
          .then(function (arcMatched) {
            // make array of matching arc id
            for (var arcNo = 0; arcNo < arcMatched.length; arcNo++) {
              results.push([]);
              (function (n) {
                  Images.reset()
                    .query({where: {arc_id: arcMatched.models[n].id}})
                    .fetch()
                    .then(function (imageMatched) {
                      // loop through all images in each arc
                      for (var img = 0; img < imageMatched.length; img++) {
                        // console.log('All images in this arc =>', imageMatched.models[img].attributes.url, 'here is n =>', n);
                        results[n].push({thumbnail: imageMatched.models[img].attributes.url, src: imageMatched.models[img].attributes.url});
                      }
                    })
                    .then(function () {
                      if (n === arcMatched.length -1) {
                        res.json(results);  // => send back results
                      }
                    })
              }) (arcNo);
            }
          })
      });

		// console.log('query is an object as: ', );
		// res.send('success');
	}
}; 